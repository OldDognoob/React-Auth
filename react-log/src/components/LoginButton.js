import React from 'react';
// useAuth its a hook that comes from auth -react
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  // use the hook inside our function
  // we are going to destructure it, and equal to our hook
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  //if the user is not authenticated, if it is not true 
  return (
    !isAuthenticated && (
      // the button will be and arrow function with loginWithRedirect
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default LoginButton