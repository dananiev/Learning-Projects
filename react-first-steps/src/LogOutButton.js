import React from 'react'

function LogOutButton(props) {
    return (
        <button onClick={props.onClick}>
            LogOut
        </button>
    );
}

export default LogOutButton;