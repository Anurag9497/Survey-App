import React from 'react';

function Question({setQText}) {
    return (
        <div className="my-3 input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">?</span>
            </div>
            <input type="text" className="form-control" placeholder="Question" onChange={event => setQText(event.target.value)}/>
        </div>
    );
}

export default Question;
