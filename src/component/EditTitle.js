import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Context } from '../context/States';

export const EditTitle = (route) => {
    let titleHist = useHistory();


    const { titles, updateTitle } = useContext(Context);

    const [selectedTitle, setSelectedTitle] = useState({
        id: null,
        title: "",
        description: "",
        date: "",
        category: ""
    });

    const currentTitleId = route.match.params.id;

    useEffect(() => {
        const titleId = currentTitleId;
        const selectedTitle = titles.find(
            (currentTitle) => currentTitle.id === parseInt(titleId)
        );
        setSelectedTitle(selectedTitle);
    }, [currentTitleId, titles]);

    const onSubmit = (e) => {
        e.preventDefault();
        updateTitle(selectedTitle);
        titleHist.push("/");

        fetch('http://localhost:3001/posts/' + selectedTitle.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedTitle),
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));
    };

    const handleOnChange = (titleKey, newValue) =>
        setSelectedTitle({ ...selectedTitle, [titleKey]: newValue });

    if (!selectedTitle || !selectedTitle.id) {
        return <div> Invalid ID </div>
    }
    return (
        <React.Fragment>
            <div className="main-container">
                <form onSubmit={onSubmit}>
                    <div className="field-separator title">
                        <Link to="/">
                            <button className="button cancel">X</button>
                        </Link>
                        <button className="button save">
                            <span>
                                Save
                            </span>
                        </button>
                    </div>
                    <div>
                        <label className="field-name">
                            Title
                        </label>
                        <input className="field-box"
                            value={selectedTitle.title}
                            onChange={(e) => handleOnChange("title", e.target.value)}
                            type="text" />
                    </div>
                    <div className="field-separator">
                        <label className="field-name">
                            Description
                        </label>
                    </div>
                    <div className="field-separator">
                        <textarea className="field-box description"
                            value={selectedTitle.description} onChange={(e) => handleOnChange("description", e.target.value)}
                            type="text" />
                    </div>
                    <div className="field-separator datecat">
                        <label className="field-name">
                            Date
                        </label>
                        <input className="field-box date"
                            value={selectedTitle.date} onChange={(e) => handleOnChange("date", e.target.value)}
                            type="date" />
                        <label className="field-name category">
                            Categories
                        </label>
                        <select className="field-box selection"
                            value={selectedTitle.category} onChange={(e) => handleOnChange("category", e.target.value)}
                            type="text">
                            <option value="Article">
                                Article
                            </option>
                            <option value="Paper">
                                Paper
                            </option>
                        </select>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}