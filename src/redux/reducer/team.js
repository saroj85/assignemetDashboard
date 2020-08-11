import * as actionType from '../type/team';



const initialState = {
    type: actionType.TEAM_INIT,
    teams: [
        {
            id: 11,
            name: 'team1',

        }
    ],
    users: [
        {
            id: 12,
            name: 'saroj kumar',
            teamId: 11,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
        }
    ],
    currentTeamId: undefined
};


const teamReducer = (state, action) => {
    if (!state || typeof action.type === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case actionType.ADD_TEAM_SUCCESS:
            let temp_temps = state.teams ? [...state.teams] : [];
            let team = action.data;
            if (team) {
                temp_temps.push(team)
            }

            return {
                ...state,
                type: action.type,
                teams: temp_temps
            };

        case actionType.ADD_USER_INSIDE_TEAM:
            let temp_users = state.users ? [...state.users] : [];
            let user = action.data;
            temp_users.push(user)
            return {
                ...state,
                type: action.type,
                users: temp_users
            }
        case actionType.DELETE_USER_INSIDE_TEAM:
            return {
                ...state,
                type: action.type,
                users: state.users.filter(user => user.id !== action.data)
            }

        case actionType.UPDATE_CURRENT_ID:

            return {
                ...state,
                type: action.type,
                currentTeamId: action.data
            }

        default:
            return { ...state };
    }
}

export default teamReducer;