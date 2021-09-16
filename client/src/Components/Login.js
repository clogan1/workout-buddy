import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    container: {
      color: 'white',
      textAlign: 'center',
      display: 'flex',
    //   marginTop: '20%',
    //   marginBottom: '25%',
      paddingTop: '10%',
      paddingBottom: '25%',
      flexDirection: 'row',
      justifyContent: 'center',
    //   height: '80vh',
    //   backgroundColor: 'black'
    },
    divider : {
        backgroundColor: 'white',
        height: '500px',
        paddingTop: '0',
        paddingBottom: '0'
    },
    boxes: {
        // backgroundColor: 'pink',
        margin: 'auto',
        height: '500px',
        justifyContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        // float: 'left',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto'
    }
  })

function Login ({ setUser, setLog }) {
    const classes = useStyles()
const [showLogin, setShowLogin] = useState(true)

    return (
        <Grid container className={classes.container} > 
            <Grid item  xs={4} className={classes.boxes}>
                <Box title>
                <Typography variant="h5">Welcome to</Typography>
                <Typography variant="h2"><strong>Workout Buddy</strong></Typography>
                </Box>
            </Grid>
            <Divider orientation="vertical" flexItem className={classes.divider}/>
            <Grid item xs={4} className={classes.boxes}>
            {showLogin ? 
            (
                <Box>
                <LoginForm setUser={setUser} setLog={setLog}/>
                <br></br>
                <Typography>
                    Not a member? <span onClick={() => setShowLogin(false)}><em>Sign up</em></span>
                </Typography>
                </Box>
            )
             : 
             (
                 <Box>
                 <SignUpForm setUser={setUser}/>
                 <br></br>
                 <Typography>
                    Already a member? <span onClick={() => setShowLogin(true)}><em>Login</em></span>
                </Typography>
                 </Box>
             )
            
            }
             </Grid>
        </Grid>
    )
}
export default Login;