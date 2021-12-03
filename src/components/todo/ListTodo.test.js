import React from 'react';
import { shallow } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import ListTodo from './ListTodo';

Enzyme.configure({ adapter: new Adapter() });

describe('TodoList component', () => {
  
    const props = 
        {
          id: 1,
          description: 'Testing todo',
        }
  
    const component = shallow(<ListTodo todo={props} />);
  
    it('Should render successfully', () => {
      expect(component.exists()).toEqual(true);
    });
  
    it('Should display a todo when passed in as a prop', () => {
      expect(component.find('.todo__desc').text()).toEqual(description);
    });
  });