import React from 'react';
import PropTypes from 'prop-types';

const ListTodo = ({ todo }) => (
    <li className="todo__desc">{todo.description}</li>
)

ListTodo.prototype = {
    todo: PropTypes.object.isRequired
}

export default ListTodo;