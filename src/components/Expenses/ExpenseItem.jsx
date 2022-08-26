
import ExpenseItemDate from './ExpenseItemDate';
import ExpenseItemDetail from './ExpenseItemDetail';

import '../General/Card';



const ExpenseItem = (props) => {

  return ( 
    <li>
      <div className='expense-item card'>
        <ExpenseItemDate date={props.date}/>    
        <ExpenseItemDetail amount={props.amount} title={props.title}/>
      </div>
    </li>
    
   );
}
 
export default ExpenseItem;