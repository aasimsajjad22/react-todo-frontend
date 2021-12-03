import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
    const [formData, setFormData] = useState({
        todoText: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        submitTodo(todoText)    
    };

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const { todoText } = formData;

    return (
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input
                    className="form-input__todotext"
                    name="todoText"
                    type="text"
                    id="form-input__todotext"
                    placeholder="Add todo item"
                    value={todoText}
                    onChange={e => onChange(e)}
                    required
                />
            </div>
            <button type="submit" className="btn-add-todo" >Add</button>
      </form>
    )
}
AddTodo.propTypes = {
    submitTodo: PropTypes.func.isRequired,
};
export default AddTodo;