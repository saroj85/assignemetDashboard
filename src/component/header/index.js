import React, { useEffect, useState } from 'react'
import { Header } from './header.styled';
import { connect } from 'react-redux';
import { add_team } from '../../redux/action/team'


const Index = (props) => {

    const [teamInput, setTeamInput] = useState('')
    const [type, setType] = useState('team')


    // here we are calling add team function 
    const addTeam = () => {
        if (!type) {
            alert("Please select type")
        }
        else if (!teamInput || teamInput.length <= 1) {
            alert("Please enter team name")
        }
        else {
            let team = {
                type: type,
                name: teamInput,
            }
            props.add_team(team)
            setTeamInput('')
        }
    }

    return (
        <Header>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'white',
                padding: '10px',
                paddingTop: 2,
                alignItems: 'flex-end',
                borderRadius: 5
            }}>
                <div className="row">
                    <label>Select Type</label>
                    <select name="team" id="team" onChange={(e) => setType(e.target.value)}>
                        <option value="team">Team</option>
                    </select>
                </div>

                <div className="row">
                    <label>Team Name</label>
                    <input placeholder="Enter Name" type="text" value={teamInput} onChange={(e) => setTeamInput(e.target.value)} />
                </div>

                <div>
                    <button onClick={() => addTeam()}>CREATE</button>
                </div>
            </div>
        </Header>
    )
}



const mapStateToProps = state => {
    const { teams } = state.teamReducer;

    return { teams }
};


export default connect(mapStateToProps, { add_team })(Index);


