import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from "./components/todo/AddTodo";
import { submitTodo } from "./actions/todo";

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

export default connect(mapStateToProps, {submitTodo})(App);