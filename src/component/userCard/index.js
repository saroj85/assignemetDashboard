import React, { useState, useEffect } from 'react';
import { UserCardMain } from './userCard.styled'
import { add_user, delete_user } from '../../redux/action/team'
import { generate_unique_key } from '../../redux/action/helper';
import { connect } from 'react-redux';


const Index = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { user, add_user, currentTeamId, delete_user } = props;


    useEffect(() => {
        if (user) {
            setDescription(user.description);
            setName(user.name)
        }
    })


    const ButtonClicked = () => {
        if (currentTeamId) {
            let id = generate_unique_key();
            let _user = {
                teamId: currentTeamId,
                id,
                name: name,
                description: description

            }
            if (!name) {
                alert("please Enter Name")
            }
            else if (!description) {
                alert("please Enter Description")
            }
            else {
                if (user) {
                    delete_user(user.id)
                }
                else {
                    add_user(_user)
                    setName('')
                    setDescription('')
                }
            }
        }

    }

    return (
        <UserCardMain>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => {
                    if (!user) {
                        setName(e.target.value)
                    }
                }} />
            </div>

            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => {
                    if (!user) {
                        setDescription(e.target.value)
                    }
                }} />
            </div>

            {user ? <button className="delete_user" onClick={() => ButtonClicked()}>Delete User &nbsp; &nbsp; <i className="fas fa-minus"></i> </button> : <button className="create_user" onClick={() => ButtonClicked()}>Create User &nbsp; &nbsp; <i className="fas fa-plus"></i> </button>}

        </UserCardMain>
    )
}


const mapStateToProps = state => {
    const { currentTeamId } = state.teamReducer;
    return { currentTeamId }
};


export default connect(mapStateToProps, { add_user, delete_user })(Index);
