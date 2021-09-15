import React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom"

function LoginForm({setUser, setLog}) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

 function handleSubmit (e) {
   setErrors([])
    e.preventDefault();
    setIsLoading(true);
     fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            username: username, 
            password: password
            }),
      })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => {
            setUser(user)
            setLog(user.workout_logs)
          });
          history.push('/myworkoutbuddy');
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
    });
  }

  // console.log(errors)
        
    return(
        <div className ="login-wrapper">
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
             type="password"
             id="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        {(errors.length > 0) ? 
            (
                <ul>
                    {errors.map(err => (
                        <li key={err}>{err}</li>
                    ))
                    }
                </ul>
            )
            :
            null
            }
        </div>
    )
}

export default LoginForm;