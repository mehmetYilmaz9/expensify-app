import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';


///test the set start date
test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

/// test the set end date
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

//test set text filter
test('should generate set text filter', () => {
    const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});
test('should generate set text filter', () => {
   
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

//test set sort by amount
test('should generate sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

//
test('should generate sort by date', () => {
    
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE' 
    })
})
