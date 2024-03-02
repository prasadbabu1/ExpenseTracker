import React, { useState } from 'react'
import axios from "axios"

const ExpenseTracker = () => {
    const [balance,setbalance]=useState(0)
    const [description,setDescription]=useState("")
    const [transaction,setTransaction]=useState([])
    const [amount,setAmount]=useState("")

    const addExpense=async()=>{
        const parsedAmount=parseFloat(amount);
        if(isNaN(parsedAmount)|| parsedAmount<0){
            alert("Please enter a valid amount")
            return;
        }

        setbalance((preBal)=>preBal+parsedAmount)

    
        //add transaction to list
        setTransaction((preTrans)=>[...preTrans,{description,amount:parsedAmount},])
        let Res = await axios.post("http://localhost:3009/expenses",{ description:description,
        amount:parsedAmount})
        console.log(Res,"postmethod")
        //clear form
        setDescription()
        setAmount()
    }
  return (
    <div> 
        <div className='container'>
            <h1>Expense Tracker</h1>
            <div className='balance'>
                <h2>Balance:$ <span id='balance'>{balance.toFixed(2)}</span></h2>
            </div>
            <div className='transaction'>
                <h2>transaction</h2>
                <ul>{
                    transaction.map((trans,index)=>(
                        <li key={index}>{
                            `${trans.description}:$${trans.amount.toFixed(2)}`
                        }</li>
                    ))
                    }</ul>
            </div>
            <div className='add-expense'>
                <h2>Add Expense</h2>
                <form>
                    <label htmlFor='description'>Description:</label>
                    <input type="text" id="description" placeholder='Add description' value={description} onChange={(e)=>setDescription(e.target.value)} required/>

                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" placeholder="Add amount" value={amount} onChange={(e)=>setAmount(e.target.value)} required/> 
                    <button type="button" onClick={addExpense}>Add Expense</button>   
                </form>
            </div>
        </div>
    </div>
  )
}

export default ExpenseTracker