import React, {createContext, useContext, useReducer} from 'react'

const InvestmentStateContext = createContext()
const InvestmentDispatchContext = createContext()

function InvestmentReducer(state, action) {
  if(action.type === 'add'){
    console.log({...state, investments: state.investments.concat(action.newInvestment)}, 'result');
  }
    switch (action.type) {
      case 'get': {
        return {...state, investments: action.investments}
      }
      case 'add': {
        return {...state, investments: state.investments.concat(action.newInvestment)}
      }
      default: {
        return {...state, investments: []}
      }
    }
  }

  function InvestmentProvider({children}) {
    const [state, dispatch] = useReducer(InvestmentReducer, [])
    return (
      <InvestmentStateContext.Provider value={state}>
        <InvestmentDispatchContext.Provider value={dispatch}>
          {children}
        </InvestmentDispatchContext.Provider>
      </InvestmentStateContext.Provider>
    )
  }

  function getInvestments(dispatch) {
    fetch("https://gorila-api.herokuapp.com/investments")
    .then(response => response.json()) // retorna uma promise
    .then(result => {
      dispatch({type: 'get', investments: result})
    })
    .catch(err => {
      console.error('Failed retrieving information', err);
    });
  }
  
  function removeInvestment(dispatch, id) {

  }
  
  function addInvestment(dispatch, payload) {
    fetch('https://gorila-api.herokuapp.com/investments', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: payload
    })
    .then(response => response.json()) // retorna uma promise
    .then(result => {
      console.log(result);
      dispatch({type: 'add', newInvestment: [result]})
    })
    .catch(err => {
      console.error('Failed retrieving information', err);
    });
  }
  
  function useInvestmentDispatch() {
    const context = useContext(InvestmentDispatchContext)
    if (context === undefined) {
      throw new Error(
        `useInvestmentDispatch must be used within a InvestmentProvider`,
      )
    }
    return context
  }
  
  function useInvestmentState() {
    const context = useContext(InvestmentStateContext)
    if (context === undefined) {
      throw new Error(`useInvestmentState must be used within a InvestmentProvider`)
    }
    return context
  }
  
  export {
    InvestmentProvider,
    useInvestmentDispatch,
    useInvestmentState,
    getInvestments,
    removeInvestment,
    addInvestment
  }