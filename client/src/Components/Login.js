import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { useState } from 'react';

function Login () {
const [showLogin, setShowLogin] = useState(true)

    return (
        <div> 
            <h1>Login</h1>
            {showLogin?
             <LoginForm />
             : 
             <SignUpForm />
            }
        </div>
    )
}
export default Login;