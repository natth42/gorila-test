import React, {createContext, useContext, useReducer} from 'react'

import getEnvPath from '../utils/env';

const InvestmentStateContext = createContext()
const InvestmentDispatchContext = createContext()

function InvestmentReducer(state, action) {
    switch (action.type) {
      case 'get': {
        return {...state, investments: [], loading: true}
      }
      case 'get_success': {
        return {...state, investments: action.investments, loading: false}
      }
      case 'add': {
        return {...state, investments: state.investments.concat(action.newInvestment)}
      }
      case 'remove': {
        return {...state, investments: state.investments.filter((item) => item._id !== action.id)}
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
    dispatch({type: 'get'});

    fetch(`${getEnvPath}/investments`)
    .then(response => response.json()) 
    .then(result => {
      dispatch({type: 'get_success', investments: result});
    })
    .catch(err => {
      console.error('Failed retrieving information', err);
    });
  }
  
  function removeInvestment(dispatch, id) {
    fetch(`${getEnvPath}/investments/${id}`, {method: 'DELETE'})
    .then(response => response.json()) 
    .then(result => {
      dispatch({type: 'remove', id})
    })
    .catch(err => {
      console.error('Failed retrieving information', err);
    });
  }
  
  function addInvestment(dispatch, payload) {
    fetch(`${getEnvPath}/investments`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: payload
    })
    .then(response => response.json())
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