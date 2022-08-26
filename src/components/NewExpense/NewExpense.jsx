import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
  let presentExpenseId = 0;

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: presentExpenseId++
    };

    props.onAddExpense(expenseData);
  };  

  const addNewExpense = () => {
    setIsEditing(true);    
  }

  const cancelNewExpense = () => {   
    setIsEditing(false);
  }

  return ( 
    <div className='new-expense'>
      {!isEditing && <button onClick={addNewExpense} >Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelNewExpense}/>}
    </div>

   );
}
 
export default NewExpense;