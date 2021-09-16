import React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom"
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
    height: '250px',
  },
  formItems : {
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#e0e0e0',
    width: '300px',
    height: '40px'
  },
  labels: {
    textAlign: 'left'
  },
  errorItem: {
    marginTop: '20px',
    marginBottom: '20px',
  }
})


function LoginForm({setUser, setLog}) {
  const classes = useStyles()

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
        <Container className={classes.formDiv}>
            <form onSubmit={handleSubmit} autoComplete="off">
            <Typography className={classes.labels}>username:</Typography>
            <input 
            type="text"
            id="username"
            variant="outlined"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className={classes.formItems}
            />
            <br></br>
            <Typography className={classes.labels}>password:</Typography>
            <input 
             type="password"
             id="password"
             variant="outlined"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className={classes.formItems}
            />
            <br></br>
            <br></br>
            <Button type="submit" color="primary" variant="contained">Login</Button>
        </form>
        {(errors.length > 0) ? 
            (
                <Box className={classes.errorItem} >
                    {errors.map(err => (
                        <Typography key={err} color="error">{err}</Typography>
                    ))
                    }
                </Box>
            )
            :
            null
            }
        </Container>
    )
}

export default LoginForm;