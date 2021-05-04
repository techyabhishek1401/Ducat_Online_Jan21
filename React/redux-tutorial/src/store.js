import { createStore } from 'redux';
import rotateReducer from './reducers/rotateReducer'
import { composeWithDevTools } from "redux-devtools-extension";
function configureStore(state = { rotating: true, someValue: "something" }) {
    return createStore(rotateReducer, state, composeWithDevTools());
}

export default configureStore