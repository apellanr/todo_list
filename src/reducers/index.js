import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    todos: todoReducer,
    form: formReducer
});

export default rootReducer;