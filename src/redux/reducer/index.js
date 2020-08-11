
import { combineReducers } from 'redux';
import teamReducer from './team'



const rootReducer = combineReducers(
    {
        teamReducer: teamReducer,


    }
);



export default rootReducer;