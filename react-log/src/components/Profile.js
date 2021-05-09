import React from 'react'
import {useAuth0} from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    // if the user is authenticated , means if that is true then render all the 
    // above information
    return (
        isAuthenticated && (
            <div>
            <img src={user.picture} alt={user.name}/>
            <h2>{user.name}</h2>
            <p>{user.mail}</p>
            <JSONPretty data={user}/>
        </div>
        )
        
    )
}

export default Profile
