import React, {createContext, useContext, useReducer} from 'react'

const InvestmentStateContext = createContext()
const InvestmentDispatchContext = createContext()

function InvestmentReducer(listItems, action) {
    switch (action.type) {
      case 'get': {
        return [action.listItem]
      }
      case 'add': {
        return [...listItems, action.listItem]
      }
      case 'remove': {
        return listItems.filter(li => li.id !== action.id)
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
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

  }
  
  function removeInvestment(dispatch, id) {

  }
  
  function addInvestment(dispatch, payload) {

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