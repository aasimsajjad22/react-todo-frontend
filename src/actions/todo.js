import axios from 'axios';
import types from './types';

const baseUrl = 'http://localhost:8081';

export const submitTodo = (todo) => dispatch => {
    submitTodoApiCall(todo).then((data) => {
        if(data) {
            dispatch({
                type: types.SUBMIT_TODO,
                payload: data
            });
        }
    });
}

export const submitTodoApiCall = async(todo) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ description: todo });
    try {
        const res = await axios.post(baseUrl+'/todo', body, config);
        return res.data
    } catch(err) {
        console.log(err)
    }
    return null;
}
