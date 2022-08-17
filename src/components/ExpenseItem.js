import './ExpenseItem.css';


const ExpenseItem = (props) => {
  let {title,amount} = props;
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digits'});
  const year = props.date.getFullYear;


  return ( 
    <div className='expense-item'>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
   );
}
 
export default ExpenseItem;