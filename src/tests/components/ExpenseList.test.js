import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';

//Shallow rendering is useful to constrain yourself to testing a component as a unit, 
//and to ensure that your tests aren't indirectly asserting on behavior of child components.

import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

//first we try to test the snapshot
test ('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test ('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
