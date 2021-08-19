import React, { createContext, useReducer, useEffect, useState } from 'react';

import Reducer from './Reducer';

const InitState = {
    titles: [
    ]
};

export const Context = createContext(InitState);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, InitState);
    const [loading, setLoading] = useState(true);

    function setTitles(titles) {
        dispatch({
            type:"SET_TITLE",
            payload: titles
        });
    }
    function createTitle(title) {
        dispatch({
            type: "CREATE_TITLE",
            payload: title
        });
    }

    function updateTitle(title) {
        dispatch({
            type: "UPDATE_TITLE",
            payload: title
        });
    }

    function deleteTitle(id) {
        dispatch({
            type: "DELETE_TITLE",
            payload: id
        });
    }
    useEffect(() => {
        fetch('http://localhost:3001/posts/')
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(setTitles)
            .then(() => setLoading(false));
    }, []);
    return (
        <Context.Provider
            value={{
                titles: state.titles,
                loading,
                createTitle,
                updateTitle,
                deleteTitle
            }}
        >
            {children}
        </Context.Provider>
    );
};