import React from 'react';
import {useState} from 'react';

function LoginForm({setUser}) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

 function handleSubmit (e) {
    e.preventDefault()
     fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            username: username, 
            password: password
            }
        )
      })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
          history.push('/myworkoutbuddy')
        }
    });
  }
        
    return(
        <div className ="login-wrapper">
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input 
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
         <label htmlFor="password">Password: </label>
            <input 
             type="text"
             id="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default LoginForm;