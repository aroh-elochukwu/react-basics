import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const expensesContainer = [];

function App() {  

  const [expenses, setExpenses] = useState(expensesContainer);

  const addExpenseHandler = newExpenseItem => {
    setExpenses(prevExpenses => {
      return [newExpenseItem, ...prevExpenses];
    });
  };   

  return (
    <div >        
      <NewExpense onAddExpense={addExpenseHandler}/>      
      <Expenses items={expenses}/>  
    </div>
  );
}

export default App;
