console.log("101");
////import the store from the redux design pattern
import {createStore} from 'redux';

///Action generators - functions that return action objects

///if the payload is empty, then it's a empty object
const incrementCount = ({ incrementBy  = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
 

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


const resetCount = () => ({
    type:'RESET'
   
});


const setCount = ({ count }) => ({
    type: 'SET',
    count
  });



// Reducers
// 1. reducers are pure functions
// 2. never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        //case 1 = the action type is equals to INCREMENT, then it's return the count + 1
        case 'INCREMENT':
            //ternary operator to determine the action.increment// if it's not true we're just going to default the value to one that'll be the default increment
            //const incrementBy = typeof action.incrementBy === 'number'? action.incrementBy : 1; 
            
            return {
                count: state.count + action.incrementBy
            };

        //case 2 = the action type is equals to DECREMENT, then it's return the count - 1 
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number'? action.decrementBy : 1; 
            return {
                count: state.count - action.decrementBy
            };

        //case 3 = the action type is equals to RESET, then it's return 0
        case 'RESET':
            return {
                count: 0
            };

        case 'SET':
            return {
                count:action.count
        };
           
        //for the default case :
        default: 
            return state;
        }    
};



//for access the action object -> get passed in as the second argument to this function// the first is state
const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
  });

store.dispatch(
    {
        type:'INCREMENT'
    }
);

///one of the disadvantages of manually generating your obj every single tuume is that typo are not to catch
//if we call the function incrementCount, we are going to get the action object back as expected


////STORE FOR INCREMENT
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 6}));



////////////STORE FOR RESET
store.dispatch(resetCount());



////////////STORE FOR DECREMENT
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy:10}));



///////////STORE FOR SET
store.dispatch(setCount({ count :101}));

