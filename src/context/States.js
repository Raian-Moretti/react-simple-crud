import { createContext } from 'jest-runtime';
import React, { CreateContext, useReducer } from 'react';

import Reducer from './context';

const InitState = {
    user: [
        {
            id: 0
        }
    ]
}

export const Context = createContext(InitState);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, InitState);

    function createUser(user) {
        dispatch({
            type: "CREATE_USER",
            payload: user
        });
    }
    /*
    function readUser(user) {
        dispatch({
            type: "READ_USER",
            payload: user
        });
    }*/

    function updateUser(user) {
        dispatch({
            type: "UPDATE_USER",
            payload: user
        });
    }

    function deleteUser(id) {
        dispatch({
            type: "DELETE_USER",
            payload: id
        });
    }
    return(
        <Context.Provider
            value = {{
                user: state.user,
                createUser,
                //readUser
                updateUser,
                deleteUser
            }}
        >
            {children}
        </Context.Provider>
    );
};