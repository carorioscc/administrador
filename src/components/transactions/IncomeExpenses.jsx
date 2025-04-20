import { useGlobalState } from "../../context/GlobalState"


function IncomeExpenses(){
    const { transactions} = useGlobalState();
    const amounts = transactions.map((transaction)=>transaction.amount);
    console.log(amounts);
    //filtrar elementos
    const income = amounts
                    .filter( item => item > 0)
                    //de un valor anterior y siguiente permite procesarlos
                    .reduce((acc, item) => (acc += item), 0);
                
    const expense = amounts.filter((item ) => item < 0)
                            .reduce((acc, item)=>acc+=item, 0)* -1;
    console.log(expense);
    
    return (
        <>
        <div>
            <h3>Ingresos</h3>
            <p> {income}</p>
        </div>
        <div>
            <h3>Gastos</h3>
            <p>{expense}</p>
        </div>
        </>
    );
}

export default IncomeExpenses