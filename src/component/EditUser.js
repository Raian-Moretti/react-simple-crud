import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Context } from '../context/States';

export const EditUser = (route) => {
    let userHist = useHistory();


    const { editUser, users } = useContext(Context);

    const [selectedUser, setSelectedUser] = useState({
        id: null,
        name: "",
        role: "" 
    });

    const currentUserId = route.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(
            (currentUser) => currentUser.id === parseInt(userId)
        );
        setSelectedUser(selectedUser);
    }, [currentUserId, users]);
    
    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        userHist.push("/");
    };

    const handleOnChange = (userKey, newValue) =>
        setSelectedUser({...selectedUser, [userKey]: newValue});

    if(!selectedUser || !selectedUser.id){
        return <div> Invalid ID </div>
    }
    return (
        <React.Fragment>
            <div className="Sub User">
                <form onSubmit={onSubmit}>
                    <label>
                        User
                    </label>
                    <input className="Input User B" 
                            value={selectedUser.name} 
                            onChange={(e) => handleOnChange("name", e.target.value)} 
                            type="text" 
                            placeholder="Update Name"/>
                    <label>
                        Role
                    </label>
                    <input className="Input Role B" 
                            value={selectedUser.role} onChange={(e) => handleOnChange("name", e.target.value)} 
                            type="text" 
                            placeholder="Update Role"/>
                    <div className="Edit User">
                        <button className="EditButton">
                            Edit User
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