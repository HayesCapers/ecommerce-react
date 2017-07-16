// This is our master reducer... the 'root' reducer
// reducers hold peices of state
// the rootReducer holds All reducers.
// I.e. the rootreducer holds ALL peices of state, or application state

// We need to get the combineReducers method from redux, to make a rootReducer
// that the Provider can use
import { combineReducers } from 'redux';

// import each reducer here:
import StudentReducer from './StudentReducer';
import RegisterReducer from './RegisterReducer';

// create a rootReducer using the combineReducer method, so we can export 
// it to the store in index.js
const rootReducer = combineReducers({
	// inside here, we pass each reducer as a key/value
	// Each key will be available as a peice of state later
	students: StudentReducer,
	registerState: RegisterReducer
})

export default rootReducer;