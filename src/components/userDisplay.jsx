import React, {Component} from 'react';
import UserList from './userList.jsx';
import UserDetails from './userDetails';

class UserDisplay extends Component{
    state = {
        users: [
            {id: 0, firstName: 'Bibek', lastName: 'BC'},
            {id: 1, firstName: 'Krishna', lastName: 'Shingh'},
            {id: 2, firstName: 'Jaideb', lastName: 'Mandal'},
            {id: 3, firstName: 'Bhanu', lastName: 'Rai'},
            {id: 4, firstName: 'Someone', lastName: 'Withhorn'},
        ],
        selected: 0
    }

    handleClick = (userId) => {
        this.setState({selected: userId})
    }

    handleUpdate = (user) => {
        const users = this.state.users.map( 
            u => (u.id === user.id) ? user: u
            );
        this.setState({ users })
    }

    render(){
        const { users, selected } = this.state;
        return (
            <React.Fragment>
                <UserList 
                    users={users}
                    selected={selected}
                    onClick={this.handleClick}
                />
                <UserDetails
                    user={users[selected]}
                    onUpdate={this.handleUpdate}
                />
            </React.Fragment>
        );
    }
}

export default UserDisplay;