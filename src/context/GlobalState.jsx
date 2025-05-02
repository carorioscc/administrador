import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
const initialState = {
    transactions : [],
}

export const Context = createContext(initialState);

export const useGlobalState = () => {
    const context = useContext(Context);
    if (!context)
        throw new Error("useGlobalState must be used within a GlobalState");
    return context;
};
//retornaa un componente
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState, () => {
        //cuando cargue que lea storage 
        const localData = localStorage.getItem('transactions')
        localData ? JSON.parse(localData) : initialState;
        
    });
    //actualiza como carca cuando cambia el estado
    useEffect(()=>{
        //guardar lo que esta reflejado
        localStorage.setItem('transactions', JSON.stringify(state));

    }, [state])


    const addTransaction = (transaction) => {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
        console.log("agregando transaccion");
    };
    const deleteTransaction = (id) => {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
        console.log("Eliminar transaccion");
    };
    return (
        <Context.Provider
          value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
          }}
        >
          {children}
        </Context.Provider>
    );
    
};