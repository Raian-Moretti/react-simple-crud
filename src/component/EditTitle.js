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

        fetch('http://localhost:3001/posts/'+ selectedTitle.id, {
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
            <div>
                <form onSubmit={onSubmit}>
                    <label>
                        Title
                    </label>
                    <input
                        value={selectedTitle.title}
                        onChange={(e) => handleOnChange("title", e.target.value)}
                        type="text"
                        placeholder="Update Name" />
                    <label>
                        Description
                    </label>
                    <input
                        value={selectedTitle.description} onChange={(e) => handleOnChange("description", e.target.value)}
                        type="text"
                        placeholder="Update Description" />
                    <label>
                        Date
                    </label>
                    <input
                        value={selectedTitle.date} onChange={(e) => handleOnChange("date", e.target.value)}
                        type="text"
                        placeholder="Update Date" />
                    <label>
                        Category
                    </label>
                    <select
                        value={selectedTitle.category} onChange={(e) => handleOnChange("category", e.target.value)}
                        type="text"
                        placeholder="Update Category">
                            <option value="Article">
                                Article
                            </option>
                            <option value="Paper">
                                Paper
                            </option>
                        </select>
                    <div>
                        <button>
                            Edit Title
                        </button>
                    </div>
                    <div>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}