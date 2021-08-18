import React, { useContext } from 'react';

import { Context } from '../context/States';

export const UserList = () => {
    const { users } = useContext(Context);
    return (
        <React.Fragment>
            {users.length > 0 ? (
                <React.Fragment>
                   {users.map((user) =>
                   <div 
                        ClassName="UserID"
                        key={user.id}
                    >
                        <div ClassName="UserName">
                        <p>
                            {user.name}
                        </p>
                        <p>
                            {user.role}
                        </p>
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