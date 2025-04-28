import { VictoryPie, VictoryLabel} from "victory"
function ExpenseChart(){
    return (
        <div className="bg-zinc-950">
          <VictoryPie
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
              { x: "Expenses", y: expensesPercentage },
              { x: "Incomes", y: incomesPercentage },
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