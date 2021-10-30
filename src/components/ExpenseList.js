import React from 'react';
import { connect } from 'react-redux';

///IMPORT EXPENSE LIST ITEM
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    //map take in an array 
    <div>

        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
               
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }
       
    </div>
);

//function who maps the store state to component props
const mapStateToProps = (state) => {
    //after import the expense selector, 
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStateToProps)(ExpenseList);

