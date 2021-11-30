import react from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import { shallow } from 'enzyme'

import AddTodo from './components/todo/AddTodo'

Enzyme.configure({ adapter: new Adapter() });

describe( 'App component', () => {
  it('Should contains AddTodo component for adding todos', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.exists()).toEqual(true)
  })
  
});