import React from 'react';

const UserOutput = (props) => {
    const outputStyle = {
        border: '2px solid black',
        width: '60%',
        margin: '20px',
        backgroundColor: '#ccc',
        textAlign: 'center'
    }
    return (
        <div style={outputStyle}>
            <p>Username: {props.userName}</p>

            <p>Second Paragraph</p>
        </div>
    );
}

export default UserOutput;