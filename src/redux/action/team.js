import * as actionType from '../type/team';
import { dispatchAction, generate_unique_key } from './helper';


export const add_team = (team) => async dispatch => {
    let id = generate_unique_key();
    let data = team
    data.id = id
    await dispatchAction(dispatch, actionType.ADD_TEAM_SUCCESS, data, undefined, undefined, undefined);

}


export const delete_team = (id) => async dispatch => {

    await dispatchAction(dispatch, actionType.DELETE_TEAM_SUCCESS, id, undefined, undefined, undefined);

}
export const update_current_team = (id) => async dispatch => {

    await dispatchAction(dispatch, actionType.UPDATE_CURRENT_ID, id, undefined, undefined, undefined);

}

export const add_user = (user) => async dispatch =>{

    await dispatchAction(dispatch, actionType.ADD_USER_INSIDE_TEAM, user, undefined, undefined, undefined);

}


export const delete_user = (id) => async dispatch =>{

    await dispatchAction(dispatch, actionType.DELETE_USER_INSIDE_TEAM, id, undefined, undefined, undefined);

}