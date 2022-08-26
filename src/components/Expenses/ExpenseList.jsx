import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';  

const ExpenseList = (props) => {
  
  if (props.expenses.length === 0) {
    return (
      <ul className='expenses-list'>
        <h2 className='expenses-list__fallback'>No expenses found.</h2>
      </ul>
    );
  }
  
  return ( 

    <ul className='expenses-list'>
      {props.expenses.map( expense => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
        ))}
    </ul>
    
  );
 
}

export default ExpenseList;