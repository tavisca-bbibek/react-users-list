import React from 'react';

function UserList(props){
    const {users, selected, onClick} = props;

    const getClassName = (userId) => {
        return userId === selected ? 'active' : '';
    }

    return (
        <div className="user-list-container">
            <ul>
                {users.map(user => 
                    <li key={user.id}
                        onClick={() => onClick(user.id)}
                        className = {getClassName(user.id)}>
                        {user.firstName + ' ' + user.lastName}
                    </li>
                    )}
            </ul>
        </div>
    );
}

export default UserList;