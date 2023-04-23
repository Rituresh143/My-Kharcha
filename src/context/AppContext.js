 import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
      case 'DELETE_EXPENSE':
        return {
          ...state,
          expenses:state.expenses.filter((expense)=> expense.id !== action.payload)
        }
    default: 
       return state;
  }
}
 const inititialState = {
    budget:2000,
    expenses: [
        { id: 12, name: 'shoping', cost: 40},
        { id: 11, name: 'holiday', cost: 400},
        { id: 13, name: 'car service', cost: 500},

    ]
 };

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, inititialState);
     
    return (<AppContext.Provider  value={{
      budget: state.budget,
      expenses: state.expenses,
      dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}