import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  // using one state for multiple related items

  // const [userInput, setUserInput] = useState({
  //   enteredAmount: '',
  //   enteredTitle: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);

    // not better way of updating state, but works too

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })


    //  better way of updating state

    //   setUserInput(prevState => {
    //   return {...prevState, enteredTitle: event.target.value};
    // })
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData) ;

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }

 

  return ( 
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'  value={enteredTitle} onChange={titleChangeHandler}/> 
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/> 
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2100-12-31'  value={enteredDate} onChange={dateChangeHandler}/> 
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={props.onCancel}> Cancel </button>
        <button type='submit'>Add Expense</button>

      </div>
    </form>
   );
}
 
export default ExpenseForm;