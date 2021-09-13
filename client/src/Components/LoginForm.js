import React from 'react';


function LoginForm() {
const [username, SetUserName] = useState()
const [password, SetPassword] = useState()
}
return(
    <div className ="login-wrapper">
        <h1>Please Login</h1>
        <form>
      <label>
        <p>Username</p>
        <input type="text" onChange ={e =>SetUserName} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
)
export default LoginForm;