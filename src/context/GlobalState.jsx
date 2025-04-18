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
    const addTransaction = () => {
        console.log("agregando transaccion");
    };
    return (
        <Context.Provider 
            value={{
                transactions : state.transactions,
                addTransaction,
            }}
        >
        {children}
        </Context.Provider>
    );
    
};