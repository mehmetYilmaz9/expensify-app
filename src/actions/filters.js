////////////////////set text filter
export const setTextFilter = (text= '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//////////////////////sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//////////////////////date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'    
});


///moment: when the date start
//////////////////////SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});


//////////////////////SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
