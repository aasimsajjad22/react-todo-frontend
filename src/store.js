import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoListApp from './reducers/todo';
import thunk from 'redux-thunk';


const initialState = {};

const reducers = combineReducers({
  todoListApp,
});

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
export default store;   