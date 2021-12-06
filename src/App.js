import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from "./components/todo/AddTodo";
import { submitTodo } from "./actions/todo";
import ListTodo from "./components/todo/ListTodo";

export const App = ({submitTodo, todoListApp: {todos} }) => (
    <div className="App">
      <h1>Todo App</h1>

      <AddTodo submitTodo={submitTodo} />
      
      <ul className="todo-list">
        {todos && todos.map(todo => (
          <ListTodo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todoListApp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todoListApp: state.todoListApp
});

export default connect(mapStateToProps, {submitTodo})(App);