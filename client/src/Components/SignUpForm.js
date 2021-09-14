import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignUpForm({ setUser }) {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')
    const [ avatarUrl, setAvatarUrl ] = useState('')
    const [ weeklyGoal, setWeeklyGoal ] = useState('')
    const [ errors, setErrors ] = useState([])
    const history = useHistory()

    function handleSignUpSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            avatar_url: avatarUrl,
            weekly_goal: parseInt(weeklyGoal)
        }
        fetch('/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(user => setUser(user))
            } else {
                res.json().then(err => setErrors(err.errors))
            }
        })
        history.push('/myworkoutbuddy')
    }

    // console.log(errors)

    return (
        <>
            <form onSubmit={handleSignUpSubmit}>
                <label>
                    Username
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label>
                    Confirm Password
                    <input type='password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                </label>
                <label>
                    Avatar URL
                    <input type='text' value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)}/>
                </label>
                <label>
                    Set a weekly goal:
                    <em>
                        Goals are helpful for keeping you motivated an on track. We recommend starting small and working your way up...
                    </em>
                    <select onChange={(e) => setWeeklyGoal(e.target.value)}>
                        <option value="0">--</option>
                        <option value='1'>1</option> 
                        <option value='2'>2</option> 
                        <option value='3'>3</option> 
                        <option value='4'>4</option> 
                        <option value='5'>5</option> 
                        <option value='6'>6</option> 
                        <option value='7'>7</option> 
                    </select>
                </label>
                <input type='submit' value='Get Started'/>
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
        </>
    )
}

export default SignUpForm