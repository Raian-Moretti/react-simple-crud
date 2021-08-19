import React from 'react';
import { Link } from 'react-router-dom'

export const Page = () => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h5>
                    Title List
                </h5>
                <div className="add-button">
                    <Link to="/add">
                        <button className="button success">
                            <span> Add Title </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
