import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  formDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 auto',
    // backgroundColor: 'pink',
    height: '400px',
  },
  formItems : {
    marginTop: '5px',
    marginBottom: '5px',
    backgroundColor: '#e0e0e0',
    width: '300px',
    height: '30px'
  },
  labels: {
    textAlign: 'left'
  },
  errorItem: {
    marginTop: '5px',
    marginBottom: '5px',
    fontSize: '12px'
  }
})

function SignUpForm({ setUser }) {
    const classes = useStyles()
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
        <Container className={classes.formDiv}>
            <form onSubmit={handleSignUpSubmit}  autoComplete="off">
            <Typography className={classes.labels}>username:</Typography>
            <input type='text' className={classes.formItems} value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Typography className={classes.labels}>password:</Typography>
            <input type='password' value={password} className={classes.formItems}  onChange={(e) => setPassword(e.target.value)}/>
            <Typography className={classes.labels}>confirm password:</Typography>
                    <input type='password' className={classes.formItems} value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            <Typography className={classes.labels}>avatar url:</Typography>
                    <input type='text' value={avatarUrl} className={classes.formItems} onChange={(e) => setAvatarUrl(e.target.value)}/>
                    <Typography className={classes.labels}>set a weekly goal:
                        </Typography>
                    <select onChange={(e) => setWeeklyGoal(e.target.value)} className={classes.formItems}>
                        <option value="0">--</option>
                        <option value='1'>1</option> 
                        <option value='2'>2</option> 
                        <option value='3'>3</option> 
                        <option value='4'>4</option> 
                        <option value='5'>5</option> 
                        <option value='6'>6</option> 
                        <option value='7'>7</option> 
                    </select>
                    <br></br>
                    <br></br>
                <Button type='submit' color="primary" variant="contained">
                    Get Started
                </Button>
            </form>
            {(errors.length > 0) ? 
            (
                <>
                <Box >
                    {errors.map(err => (
                        <Typography className={classes.errorItem} key={err} color="error">{err}</Typography>
                    ))
                    }
                </Box>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </>
            )
            :
            null
            }
        </Container>
    )
}

export default SignUpForm


{/* <em>
Goals are helpful for keeping you motivated an on track. We recommend starting small and working your way up... 
</em> */}