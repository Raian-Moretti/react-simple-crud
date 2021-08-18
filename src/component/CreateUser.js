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
    };
    return (
        <React.Fragment>
            <div className="Main User">
                <form onSubmit={onSubmit}>
                    <label>
                        User
                    </label>
                    <input className="Input User A" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            type="text" 
                            placeholder="Insert Name"/>
                    <label>
                        Role
                    </label>
                    <input className="Input Role A" 
                            value={role} onChange={(e) => setRole(e.target.value)} 
                            type="text" 
                            placeholder="Insert Role"/>
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