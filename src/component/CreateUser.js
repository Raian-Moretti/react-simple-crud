import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Context } from '../context/States';

export const CreateUser = () => {
    let userHist = useHistory();

    const { createUser, users } = useContext(Context);

    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length + 1,
            name,
            role
        };
        createUser(newUser);
        userHist.push("/");

        fetch('http://localhost:3001/posts/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));
    };
    return (
        <React.Fragment>
            <div>
                <form onSubmit={onSubmit}>
                    <label>
                        User
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Insert Name" />
                    <label>
                        Role
                    </label>
                    <input
                        value={role} onChange={(e) => setRole(e.target.value)}
                        type="text"
                        placeholder="Insert Role" />
                    <div className="Create User">
                        <button className="AddButton">
                            Add User
                        </button>
                    </div>
                    <div className="Cancel">
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}