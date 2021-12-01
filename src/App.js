import React from "react";
import PropTypes from 'prop-types';
import AddTodo from "./components/todo/AddTodo";

const App = ({submitTodo}) => {

  return (
    <div className="App">
      <h1>Todo App</h1>

      <AddTodo 
        submitTodo={submitTodo}
      />
      
      <ul className="todo-list">
      
      </ul>
    </div>
  );
}
App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
}

export default App
