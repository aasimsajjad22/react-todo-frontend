import react from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

import { shallow } from 'enzyme'

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe( 'App component', () => {
  
  it('Should contains AddTodo component for adding todos', () => {
    const mockFunction = jest.fn();

    const wrapper = shallow(<App submitTodo={mockFunction} />);
    expect(wrapper.exists()).toEqual(true)
  })
  
});