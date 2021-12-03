import types from "../actions/types";

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SUBMIT_TODO:        
        return {
            ...state,
            todos: [payload, ...state.todos]
            
        };
    default:
      return state;
    }
}
export default reducer;