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
    if (loading)
        return <Loader></Loader>
    return (
        <React.Fragment>
            {titles.length > 0 ? (
                <React.Fragment>
                    {titles.map((title) =>
                        <div className="background"
                            key={title.id}>
                            <div>
                                <span>
                                    {title.title}
                                </span>
                                <p className="list">
                                    {title.description}
                                </p>
                                <p className="list">
                                    {new Date(title.date + "T03:00:00.000Z").toLocaleDateString("pt-br")}
                                </p>
                                <p className="list">
                                    {title.category}
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <Link to={`/edit/${title.id}`} title="Edit Title">
                                    <button className="button edit"
                                        onClick={() => updateTitle(title.id)}
                                        title="Edit Title">
                                        <span>
                                            Edit
                                        </span>
                                    </button>
                                </Link>
                                <button className="button danger"
                                    onClick={() => onDelete(title.id)}
                                    title="Delete Title">
                                    <span>
                                        Delete
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ) : (
                <p className="empty">Empty List</p>
            )}
        </React.Fragment>
    );
};