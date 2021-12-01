import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme'
import { initialState } from './reducers/todo';
import { Provider } from "react-redux";
import store from './store';
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe( 'App component', () => {
  
  it('Should contains AddTodo component for adding todos', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <Provider store={store}>
        <App 
          initialState={initialState}
          submitTodo={mockFunction} 
        />
      </Provider>
      );
    expect(wrapper.exists()).toEqual(true)
  })
});