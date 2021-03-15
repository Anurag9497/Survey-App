import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <div className="my-4">
            <Link to="/create">
                <button className="btn btn-danger m-1">Create Survey</button>
            </Link><br/>
            <Link to="/publish">
                <button className="btn btn-danger m-1">Take Survey</button>
            </Link>
        </div>
    );
}

export default Menu;
