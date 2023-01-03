import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createContext, useReducer, useState } from "react/cjs/react.development";
import mockData from "../data/mockdata";

let ExpenseContext = createContext({
    expenses: [],
    setExpenses: (expenses) => {},
    addExpense: (expenseData) => {},
    deleteExpense: (id) => {},
    addExpense: (id, expenseData) =>  {}
});

const expenseReducer = (state, action) => {

    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expensesArray: action.payload
            }
        case "DELETE_EXPENSE":
            return {
                ...state,
                expensesArray: action.payload
            }
        case "UPDATE_EXPENSE":
            return {
                ...state,
                expensesArray: action.payload
            }
        case "SET_EXPENSES":
            return {
                ...state,
                expensesArray: action.payload
            }

        default:
            return state
    }
};



export const ExpenseProvider = ({children}) => {
    
    let initialState = {
        expensesArray: []
    };

    let [state, dispatch] = useReducer(expenseReducer, initialState);

    const addExpense = (expenseData, id) => {

        let newArray = [...state.expensesArray, {...expenseData, id: id}];

        dispatch({
            type: "ADD_EXPENSE",
            payload: newArray
        })
    };

    const setExpenses = (expenses) => {
        dispatch({
            type: "SET_EXPENSES",
            payload: expenses
        })
    };

    const deleteExpense = (id) => {

        let deletedArray = state.expensesArray.filter((expense) => expense.id !== id);

        dispatch({
            type: "DELETE_EXPENSE",
            payload: deletedArray
        })
    };

    const updateExpense = (id, expenseData) => {

        let updatedArray = state.expensesArray.map((expense) => expense.id === id ? {...expense, ...expenseData} : expense);

        dispatch({
            type: "UPDATE_EXPENSE",
            payload: updatedArray
        })
    }

    return (<ExpenseContext.Provider value={{
       expenses: state.expensesArray,
       addExpense: addExpense,
       deleteExpense: deleteExpense,
       updateExpense: updateExpense,
       setExpenses: setExpenses 

    }}>
        {children}
    </ExpenseContext.Provider>)
};

export default ExpenseContext;