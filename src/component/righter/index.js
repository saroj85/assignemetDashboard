import React, { useEffect, useState } from 'react';
import { RighterMain } from './righter.styled';
import UserCard from '../userCard';
import { connect } from 'react-redux';


const Index = (props) => {

    const { currentTeamId, users, teams } = props;
    const [localUsers, setUsers] = useState(undefined)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if (users) {
            setUsers(users)
        }
    }, [users])


    const onSearchUser = (e) => {
        let value = e.target.value;
        setSearchValue(value)
    }

    const sort_users = localUsers && localUsers.length > 0 && JSON.parse(JSON.stringify(localUsers)).filter((data) => {
        if (searchValue === '') {
            return true;
        }
        else if (data.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }

    });



    return (
        <React.Fragment>
            {currentTeamId && (
                <RighterMain>
                    <div className="heading">
                        <span>{teams && teams.length > 0 && teams.map((team, index) => {
                            if (team.id === currentTeamId) {
                                return team.name
                            }
                        })}</span>

                        <input type="text" value={searchValue} placeholder="Search User" onChange={(e) => onSearchUser(e)} />
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>

                        <UserCard />
                        {sort_users && sort_users.length > 0 && sort_users.map((user, index) => {
                            if (user.teamId === currentTeamId) {
                                return (
                                    <UserCard key={"user" + index} user={user} />
                                )
                            }
                        })}
                    </div>
                </RighterMain>
            )}
        </React.Fragment>
    )
}


const mapStateToProps = state => {
    const { users, currentTeamId, teams } = state.teamReducer;
    return { users, currentTeamId, teams }
};

export default connect(mapStateToProps, {})(Index);

