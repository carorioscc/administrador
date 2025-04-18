import { useGlobalState } from '../context/GlobalState';

//para usar el context
//import { useContext } from 'react'
//context es que trae los datos
import {Context} from '../context/GlobalState'



function Balance (){
    //acceder a context
    const data = useGlobalState();
    return(
        <div>
            <h1>Balance</h1>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    );
}

export default Balance;