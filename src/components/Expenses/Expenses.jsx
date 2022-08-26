import React, {useState} from "react";
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
import '../General/Card.css';

const Expenses = (props) => { 

  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });   
  
  return (     
      <div>       
        <div className="expenses card">
          <ExpenseFilter selectedFilterYear={filteredYear} onSelectFilterYear={filterChangeHandler}/>
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpenseList expenses={filteredExpenses}/>          
        </div>
      </div>
    
    
   );
}
 
export default Expenses;