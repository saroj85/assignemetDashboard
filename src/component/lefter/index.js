import React, { useState } from 'react';
import { MainLefter, MenuBox } from './lefter.styled';
import { connect } from 'react-redux';
import { update_current_team } from '../../redux/action/team'

const Index = (props) => {
    const { teams, update_current_team, currentTeamId } = props;

    if (!teams) {
        return <p>Please add team</p>
    }


    return (
        <MainLefter>
            <h1>Teams</h1>
            {teams && teams.length > 0 && teams.map((team, index) => {
                return (
                    <MenuBox key={"menu" + index} active={currentTeamId === team.id} onClick={() => update_current_team(team.id)}>{team.name}</MenuBox>
                )
            })}
        </MainLefter>
    )
}


const mapStateToProps = state => {
    const { teams, currentTeamId } = state.teamReducer;

    return { teams, currentTeamId }
};


export default connect(mapStateToProps, { update_current_team })(Index);

