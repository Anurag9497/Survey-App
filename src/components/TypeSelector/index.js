import React from 'react'

function TypeSelector({QType, setQType}) {
    return (
        <div className="my-3">
            <select className="w-25 rounded" value={QType} onChange={event => setQType(parseInt(event.target.value))}>
                <option value="0">Select Question Type</option>
                <option value="1">Multi-Select</option>
                <option value="2">Single-Select</option>
            </select>
        </div>
    );
}

export default TypeSelector;
