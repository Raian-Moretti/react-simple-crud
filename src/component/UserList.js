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
                        <div className="Field"
                            key={user.id}>
                            <div>
                                <span>
                                    {user.name}
                                </span>
                                <p style={{ fontSize: 14, margin: 0, padding: 0, color: "#616161" }}>
                                    {user.role}
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <Link to={`/edit/${user.id}`} title="Edit User">
                                    <button className="Button Warning"
                                        onClick={() => updateUser(user.id)}
                                        title="Edit User">
                                        Edit
                                    </button>
                                </Link>
                                <button className="Button Danger"
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