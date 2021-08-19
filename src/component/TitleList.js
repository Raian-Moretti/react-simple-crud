import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { Context } from '../context/States';
import { Loader } from './Loader';

export const TitleList = () => {
    const { titles, updateTitle, deleteTitle, loading } = useContext(Context);

    const onDelete = (id) => {
        fetch('http://localhost:3001/posts/' + id, {
            method: "DELETE"
        });
        deleteTitle(id);
        };
        if(loading)
            return <Loader></Loader>
    return (
        <React.Fragment>
            {titles.length > 0 ? (
                <React.Fragment>
                    {titles.map((title) =>
                        <div className="field"
                            key={title.id}>
                            <div>
                                <span>
                                    {title.title}
                                </span>
                                <p style={{ fontSize: 14, margin: 0, padding: 0, color: "#616161" }}>
                                    {title.description}
                                </p>
                                <p style={{ fontSize: 14, margin: 0, padding: 0, color: "#616161" }}>
                                    {new Date(title.date + "T03:00:00.000Z").toLocaleDateString("pt-br")}
                                </p>
                                <p style={{ fontSize: 14, margin: 0, padding: 0, color: "#616161" }}>
                                    {title.category}
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <Link to={`/edit/${title.id}`} title="Edit Title">
                                    <button className="button edit"
                                        onClick={() => updateTitle(title.id)}
                                        title="Edit Title">
                                        Edit
                                    </button>
                                </Link>
                                <button className="button danger"
                                    onClick={() => onDelete(title.id)}
                                    title="Delete Title">
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ) : (
                <p>Empty List</p>
            )}
        </React.Fragment>
    );
};