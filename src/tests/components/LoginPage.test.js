import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage'
 
Enzyme.configure({ adapter: new Adapter() });

test('should correctly render LOginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
})
