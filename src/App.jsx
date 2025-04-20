//importamos los componentes
import { GlobalProvider } from "./context/GlobalState"
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {TransactionForm} from './components/transactions/TransactionForm'
import TransactionList from "./components/transactions/TransactionList"
import IncomeExpenses from "./components/transactions/IncomeExpenses"
function App(){
    return (
        <GlobalProvider>
            <Header/>
            <IncomeExpenses/>
            <Balance/>
            <TransactionForm/>
            <TransactionList/>
        </GlobalProvider>
    )
}

export default App