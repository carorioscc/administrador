import { useGlobalState } from '../context/GlobalState';

//para usar el context
//import { useContext } from 'react'
//context es que trae los datos
import {Context} from '../context/GlobalState'



export function Balance (){
    //acceder a context
    const {transactions} = useGlobalState();
    const amounts = transactions.map(
        transaction =>transaction.amount)
        const total = amounts.reduce((acc, item)=>(acc+=item),0)
    return(
        <div>
            {JSON.stringify(total, null, 2)}
            <h3>Balance</h3>
            <h1>${total}</h1>
            <div>
                
            </div>
        </div>
    );
}

export default Balance;