import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);

    const incomeAmounts = incomeTransactions.map(
        incomeTransaction => incomeTransaction.incomeAmount
    )
    const incomeNumbers = incomeAmounts.map(Number)

    const expenseAmounts = expenseTransactions.map(
        expenseTransaction => expenseTransaction.expenseAmount
    )
    const expenseNumbers = expenseAmounts.map(Number)

    const totalIncome = incomeNumbers
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const totalExpenses = expenseNumbers
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    return (
        <div className='balance'>
            <h2>Your Balance</h2>
            <h3>${(totalIncome - totalExpenses).toFixed(2)}</h3>
            <div className='income-expense'>
                <div className='plus'>
                    <h3>Income</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className='minus'>
                    <h3>Expenses</h3>
                    <p>-${totalExpenses}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
