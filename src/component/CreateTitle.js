import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Context } from '../context/States';
export const CreateTitle = () => {
    let TitleHist = useHistory();

    const { createTitle, titles } = useContext(Context);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("Article");


    const onSubmit = (e) => {
        e.preventDefault();
        const newTitle = {
            id: titles.length ? titles[titles.length - 1].id + 1 : 1,
            title,
            description,
            date,
            category
        };
        createTitle(newTitle);
        TitleHist.push("/");

        fetch('http://localhost:3001/posts/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTitle),
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));
    };
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
                                Create
                            </span>
                        </button>
                    </div>
                    <div>
                        <label className="field-name">
                            Title
                        </label>
                        <input className="field-box" required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text" />
                    </div>
                    <div className="field-separator">
                        <label className="field-name">
                            Description
                        </label>
                    </div>
                    <div className="field-separator">
                        <input className="field-box description" required
                            value={description} onChange={(e) => setDescription(e.target.value)}
                            type="text" />
                    </div>
                    <div className="field-separator datecat">
                        <label className="field-name">
                            Date
                        </label>
                        <input className="field-box date" required
                            value={date} onChange={(e) => {
                                setDate(e.target.value)
                            }
                            }
                            type="date" />
                        <label className="field-name category">
                            Categories
                        </label>
                        <select className="field-box selection"
                            value={category} onChange={(e) => {
                                console.log(e.target.value)
                                setCategory(e.target.value)
                            }
                            }
                            type="text" >
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