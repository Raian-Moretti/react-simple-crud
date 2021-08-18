import React from 'react';
import { Page } from './Page'
import { UserList } from './UserList'

export const Homepage = () => {
    return (
        <React.Fragment>
            <div>
                <h3>
                React Simple CRUD
                </h3>
                <Page/>
                <UserList/>
            </div>
        </React.Fragment>
    );
};