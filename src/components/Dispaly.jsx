import React from "react";
import "../index.css";
const Display = ({allData, onEdit, onDelete}) => {
    console.log(allData);
    return (
        <div className="display">
            <h1>Display</h1>
            {allData.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <h2>{item.email}</h2>
                    <button onClick={() => onEdit(index)}>Edit</button>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Display;