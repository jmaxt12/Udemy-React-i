import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid blue'
    };
    return ( 
        <div>
            <input 
            type='text' 
            style={inputStyle}
            onChange={props.changed} 
            value={props.currentName}>
            </input>
        </div>
     );
}
 
export default UserInput;