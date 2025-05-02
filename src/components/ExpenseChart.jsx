import { VictoryPie, VictoryLabel} from "victory"
import { useGlobalState } from "../context/GlobalState";
function ExpenseChart(){

    const {transactions} = useGlobalState() ;
    const total = transactions.reduce(
      (acc, transaction) => (acc += transaction.amount),
      0
    );

    const totalIncomes = transactions.filter(transaction =>
      transaction.amount > 0)
      .reduce((acc, transaction)=>(acc += transaction.amount), 0);
    
    const totalExpenses = transactions.filter(transaction =>
      transaction.amount > 0)
      .reduce((acc, transaction)=>(acc += transaction.amount), 0)*-1;
    
    const expensesPorcentage = Math.round((totalExpenses / totalIncomes) * 100);
    const incomesPorcentage = 100 - (expensesPorcentage);
    

    console.log(total);
    console.log(totalIncomes);
    console.log(totalExpenses);

    return (
        <div className="bg-zinc-950">
          <VictoryPie
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
              { x: "Expenses", y: expensesPorcentage },
              { x: "Incomes", y: incomesPorcentage },
            ]}
            animate={{
              duration: 2000,
            }}
            labels={({ datum }) => datum.y}
            labelComponent={
              <VictoryLabel
                angle={45}
                style={{
                  fill: "white",
                }}
              />
            }
          />
        </div>
    );
}



export default ExpenseChart