console.log('expsensify');
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//////////////////////add_expense
const addExpense = ({
    description = '', 
    note ='', 
    amount = 0, 
    createdAt = 0 
    } = {}
    ) => 
        ({
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
        }
})

//////////////////////remove_expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//////////////////////edit_expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

////////////////////set text filter
const setTextFilter = (text= '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//////////////////////sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//////////////////////date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'    
});


//////////////////////SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});


//////////////////////SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);    
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default:
        return state;
    }
};

//filters Reducer
const filtersReducerDefaultState =  {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        };

      case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'amount'
        };

      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        };

      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate
        };

      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
        };

      default:
        return state;
    }
  };

// GET visible expenses 
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; 
        }
    });  
};

//STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        })
    );

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


//dispatch =envoyer
//after we add a expense, we dispatch the add, we pass an object into this
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100 }));
const expenseTwo =  store.dispatch(addExpense({description: 'Coffee', amount: 300 }));


store.dispatch(setTextFilter('rent'));
/*
store.dispatch(removeExpense({id : expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());


store.dispatch(setStartDate(125)); // startDate 125
store.dispatch(setStartDate()); // startDate undefined
store.dispatch(setEndDate(1250)); // endDate 1250

*/
const demoState = {
    expenses: [{
      id: 'poijasdfhwer',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }],
    filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined
    }
  };
  