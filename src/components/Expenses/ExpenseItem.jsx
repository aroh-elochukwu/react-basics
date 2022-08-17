
import ExpenseItemDate from './ExpenseItemDate';
import ExpenseItemDetail from './ExpenseItemDetail';

import '../General/Card';



const ExpenseItem = (props) => {

  return ( 
     <div className='expense-item card'>
      <ExpenseItemDate date={props.date}/>    
      <ExpenseItemDetail amount={props.amount} title={props.title}/>
    </div>
   );
}
 
export default ExpenseItem;