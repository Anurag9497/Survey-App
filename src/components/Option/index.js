import React from 'react';

function Option({addOption, removeOption, updateOptionInfo, newId}) {
    return (
        <div className="my-3 input-group">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Type answer here" 
            onChange={event => updateOptionInfo(newId,event.target.value)}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={addOption}>+</button>
                <button className="btn btn-outline-secondary" onClick={removeOption}>-</button>
            </div>
        </div>
    );
}

export default Option;
