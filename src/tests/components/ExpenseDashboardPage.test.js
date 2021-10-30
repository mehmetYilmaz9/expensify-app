import React from 'react';

//Shallow rendering is useful to constrain yourself to testing a component as a unit, 
//and to ensure that your tests aren't indirectly asserting on behavior of child components.
import { shallow } from 'enzyme';

import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test ('should render ExpenseDashboardPage with expenses', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
}); 