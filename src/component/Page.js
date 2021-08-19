import React from 'react';
import { Link } from 'react-router-dom'

export const Page = () => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h5>
                    User List
                </h5>
                <div className="AddButton">
                    <Link to="/add">
                        <button className="Button Success">
                            <span> Add User </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
