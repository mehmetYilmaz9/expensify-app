import React from 'react';

//Shallow rendering is useful to constrain yourself to testing a component as a unit, 
//and to ensure that your tests aren't indirectly asserting on behavior of child components.
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

import  ExpenseListItem  from '../../components/ExpenseListItem'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

//first we try to test the snapshot
test ('should render ExpenseListItem with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

//create test file 
//grab imports
//render expenselistitem with fixture data
//create snapshot