import React from "react";

const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <img 
                src={props.image} 
                alt={props.event} 
                style={{ width: '250px', height: '250px', marginRight: '1px' }} 
            />
            <h5>{props.event}</h5>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button style={buttonStyle}>View More</button>
            </a>
        </td>
    );
};

const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#4CAF50', 
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '5px',
};

export default Event;
