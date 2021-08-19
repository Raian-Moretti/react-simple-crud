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
            <div>
                <form onSubmit={onSubmit}>
                    <label>
                        Title
                    </label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Insert Title" />
                    <label>
                        Description
                    </label>
                    <input
                        value={description} onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        placeholder="Insert Description" />
                    <label>
                        Date
                    </label>
                    <input
                        value={date} onChange={(e) => {
                            setDate(e.target.value)
                        }
                        }
                        type="date"
                        placeholder="Insert Date" />
                    <label>
                        Categories
                    </label>
                    <select
                        value={category} onChange={(e) => {
                            console.log(e.target.value)
                            setCategory(e.target.value)}
                        }    
                        type="text"
                        placeholder="Select Category" >
                            <option value="Article">
                                Article
                            </option>
                            <option value="Paper">
                                Paper
                            </option>
                        </select>
                    <div>
                        <button>
                            Add Title
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