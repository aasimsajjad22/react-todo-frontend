import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from './AddTodo';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('AddTodo component', () => {
    let wrapper;
    let mountedComponent;
    const submitMock = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<AddTodo submitTodo={submitMock} />);
        mountedComponent = mount(<AddTodo submitTodo={submitMock} />);
    });

    it('Should render successfully', () => {
        expect(wrapper.exists()).toEqual(true)
    });

    it('Should have one input for adding todo', () => {
        expect(wrapper.find('.form-input__todotext').length).toEqual(1);
    });

    describe('Add todo button', () => {
        it('Should exist', () => {
          expect(wrapper.find('.btn-add-todo').length).toEqual(1);
        });

        it('Should call the submitTodo function when clicked', () => {
            expect(submitMock.mock.calls.length).toEqual(0);
            mountedComponent.find('form').simulate('submit');
            expect(submitMock.mock.calls.length).toEqual(1);
        });
    });

});