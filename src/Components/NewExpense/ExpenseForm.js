import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle,setEnteredTitle]= useState('')
  const [enteredAmount,setEnteredAmount] = useState('')
  const [enteredDate,setEnteredDate] = useState('')


  // const[userInput,setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // })
  const titleChangeHandler = (event) => {

    //setUserInput({...userInput,enteredTitle:event.target.value});
   // console.log(event);
  //  setUserInput((prevState)=>{
  //    return {...prevState,enteredTitle:event.target.value};
  //  });
    setEnteredTitle(event.target.value)
  };

  const amountChangeHandler = (event)=>{
    //setUserInput({...userInput,enteredAmount:event.target.value})

    setEnteredAmount(event.target.value)
  }
  
  const dateChangeHandler = (event)=>{
    //setUserInput({...userInput,enteredDate:event.target.value})
    setEnteredDate(event.target.value)

  }
    const submitHandler=(event)=>{
      event.preventDefault();
      const expenseData ={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
      }
      console.log(expenseData)
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" onChange={dateChangeHandler} max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
