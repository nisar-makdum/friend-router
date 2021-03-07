import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    } 
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
             <Link to={`/friend/${id}`}>
                 <button>Show Detail</button>
             </Link>
             
        </div>
    );
};

export default Friend;