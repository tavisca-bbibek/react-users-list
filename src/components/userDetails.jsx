import React, {Component} from 'react';


class UserDetails extends Component {

    state = {
        firstNameEnabled: false,
        lastNameEnabled: false
    }

    getEditOrSave(isEnabled){
        return isEnabled ? 'Save' : 'Edit';
    }

    render(){
    const {user, onUpdate} = this.props;
    const {firstNameEnabled, lastNameEnabled} = this.state;
    return (
        <div className='user-details-container'>
            <h3>USER #{ user.id }</h3>
            <hr></hr>
            <span>First Name: </span><br />
            <input onChange={
                e => {
                    const newUser = {... user};
                    newUser.firstName = e.target.value
                    onUpdate(newUser);
                }
            }
                disabled={firstNameEnabled ? '' : 'disabled'}
                type='text' 
                id='first-name' 
                value={user.firstName}/> 
                <button onClick={ 
                    () => { this.setState({firstNameEnabled: !firstNameEnabled}); }
                }
                >{this.getEditOrSave(firstNameEnabled)}</button><br />
            <span>Last Name: </span><br />
            <input onChange={
                e => {
                    const newUser = {... user};
                    newUser.lastName = e.target.value
                    onUpdate(newUser);
                }
            }
                disabled={lastNameEnabled ? '' : 'disabled'}
                type='text' 
                id='last-name' 
                value={user.lastName} />
                <button onClick={ 
                    () => { this.setState({lastNameEnabled: !lastNameEnabled}); }
                }
                >{this.getEditOrSave(lastNameEnabled)}</button><br />
        </div>
    );
    }
}

export default UserDetails;