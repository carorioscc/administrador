import { useState } from "react";
import {useGlobalState} from '../context/GlobalState';

function TransactionForm(){
    const { addTransaction } = useGlobalState();
    const [description, setDescription]=useState();
    const [amount, setAmount] = useState(0);
    
    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(description, amount);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Descripción"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input type="number" 
                    step="0.01"
                    placeholder="00.00"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button>
                    Agregar transacción
                </button>
            </form>
        </div>
    )
}

export default TransactionForm