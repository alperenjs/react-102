import React from 'react';
import Card from '../UI2/Card';
import classes from './UsersList.module.css';

function UsersList(props) {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user =>
                    <li>
                        {user.name} {user.age} years old
                    </li>
                )}
            </ul>
        </Card>
    )
}

export default UsersList