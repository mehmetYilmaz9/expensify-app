import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
//for database in lecture 152
import {startAddExpense} from '../actions/expenses';

 export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {

        this.props.startAddExpense(expense)
        this.props.history.push('/'); //gaat naar dashboard na een het toevoegen
       };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
};
   

const mapDispatchtoProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect( undefined, mapDispatchtoProps)(AddExpensePage);


