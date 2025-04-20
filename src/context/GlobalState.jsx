import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
    transactions : [],
}

export const Context = createContext();


export const useGlobalState = () => {
    const context = useContext(Context);
    return context;
};
//retornaa un componente
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);
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
                transactions : state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >
        {children}
        </Context.Provider>
    );
    
};