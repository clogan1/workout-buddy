import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { useState } from 'react';

function Login ({ setUser }) {
const [showLogin, setShowLogin] = useState(false)

    return (
        <div> 
            <h1>Login</h1>
            {showLogin ?
             <LoginForm />
             : 
             <SignUpForm setUser={setUser}/>
            }
        </div>
    )
}
export default Login;