import React from 'react';
import { Link } from 'react-router-dom'

export const Page = () => {
    return (
        <div>
            <div>
                <h5>
                    User List
                </h5>
            </div>
            <div>
                <Link to="/add">
                    <button title="Add User">
                        <span> Add User </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}
