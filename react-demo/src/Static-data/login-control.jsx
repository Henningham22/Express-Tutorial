import {useState} from 'react';
import LoginButton from './logon-button';
import LogoutButton from './logout-button';
import Greeting from './greeting';

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let button = (isLoggedIn) ? <LogoutButton onClick={() => setIsLoggedIn(false)}/> : <LoginButton onClick={() => setIsLoggedIn(true)}/>
    return(
        <>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
        </>
    )
}
export default LoginControl;