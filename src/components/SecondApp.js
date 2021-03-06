import React, { useState } from 'react'
import AddUser from './Users/AddUser'
import UsersList from './Users/UsersList'

function SecondApp() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler= (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    )
}

export default SecondApp
