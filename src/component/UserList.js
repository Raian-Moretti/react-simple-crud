import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { Context } from '../context/States';

export const UserList = () => {
    const { users, updateUser, deleteUser } = useContext(Context);
    return (
        <React.Fragment>
            {users.length > 0 ? (
                <React.Fragment>
                   {users.map((user) =>
                   <div ClassName="UserID"
                        key={user.id}>
                        <div ClassName="UserName">
                        <p>
                            {user.name}
                        </p>
                        <p>
                            {user.role}
                        </p>
                        </div>
                        <div className="EditUser">
                            <Link to={`/edit/${user.id}`}  title="Edit User">
                                <button
                                onClick={() => updateUser(user.id)}
                                title="Edit User">
                                    Edit
                                </button>
                            </Link>
                            <button
                                onClick={() => deleteUser(user.id)}
                                title="Delete User">
                                    Delete
                            </button>
                        </div>
                   </div>
                   )}          
                </React.Fragment> 
            ) : (
                <p>SALVEEE</p>
            )}
        </React.Fragment>
    );
};