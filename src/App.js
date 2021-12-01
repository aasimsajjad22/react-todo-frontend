import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from "./components/todo/AddTodo";
import actions from './actions/todo';

export const App = ({submitTodo}) => (
    <div className="App">
      <h1>Todo App</h1>

      <AddTodo 
        submitTodo={submitTodo}
      />
      
      <ul className="todo-list">
      
      </ul>
    </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(App);