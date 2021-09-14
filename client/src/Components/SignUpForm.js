import { useState, useHistory } from 'react'

function SignUpForm({ setUser }) {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')
    const [ avatarUrl, setAvatarUrl ] = useState('')
    const [ weeklyGoal, setWeeklyGoal ] = useState('')
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
        .then(res => res.json())
        .then(user => setUser(user))
        history.push('/myworkoutbuddy')
    }


    return (
        <>
            <form onSubmit={handleSignUpSubmit}>
                <label>
                    Username
                    <input type='text' value='username' onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password
                    <input type='password' value='password' onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label>
                    Confirm Password
                    <input type='password' value='password_confirmation' onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                </label>
                <label>
                    Avatar URL
                    <input type='text' value='avatar_url' onChange={(e) => setAvatarUrl(e.target.value)}/>
                </label>
                <label>
                    Set a weekly goal:
                    <em>
                        Goals are helpful for keeping you motivated an on track. We recommend starting small and working your way up...
                    </em>
                    <select onChange={(e) => setWeeklyGoal(e.target.value)}>
                        <option value='1'>1</option> 
                        <option value='2'>2</option> 
                        <option value='3'>3</option> 
                        <option value='4'>4</option> 
                        <option value='5'>5</option> 
                        <option value='6'>6</option> 
                        <option value='7'>7</option> 
                    </select>
                </label>
                <input type='submit'>Get Started</input>
            </form>
        </>
    )
}