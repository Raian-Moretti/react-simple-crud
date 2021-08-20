import React from 'react';
import { Page } from './Page'
import { TitleList } from './TitleList'

export const Homepage = () => {

    return (
        <React.Fragment>
            <div className="main-container">
                <h3 className="header">
                    React Simple CRUD
                </h3>
                <Page />
                <TitleList />
            </div>
        </React.Fragment>
    );
};