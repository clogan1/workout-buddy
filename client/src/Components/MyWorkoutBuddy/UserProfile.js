import { useState } from 'react';
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    container: {
        height: '100vh',
        // backgroundColor: 'white'
    },
    userName: {
        // backgroundColor: 'red',
        textAlign: 'center',
        marginTop: '20px',
        paddingTop: '30px'
    },
    gridItems: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'purple',
        marginTop: '20px',
        padding: '30px'
    },
    avatar: {
        width: '100px',
        height: '100px'
    }, 
    weeklyGoal: {
        color: '#6F2DBD',
        fontSize: '26px'
    }, 
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        minHeight: '400px',
        backgroundColor: '#2E2E38',
        border: '10px solid #purple',
        boxShadow: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    }, 
    labels: {
        textAlign: 'left'
      }, 
    formItems: {
        marginTop: '5px',
        marginBottom: '5px',
        backgroundColor: '#e0e0e0',
        width: '300px',
        height: '30px'
      },
      exitButton: {
        //   backgroundColor: 'white',
          float: 'right',
          marginTop: '10px',
          color: 'white',
          marginLeft: '80%'

        //   textAlign: 'right'
      }
})


function UserProfile({ user, setUser }){
    // const { username, avatar_url, weekly_goal, created_at } = user
    const [ open, setOpen ] = useState(false)
    const [ editName, setEditName ] = useState('')
    const [ avatarUrl, setAvatarUrl ] = useState('')
    const [ weeklyGoal, setWeeklyGoal ] = useState('')
    const [ errors, setErrors ] = useState([])
    const classes = useStyles()

    let options = { year: 'numeric', month: 'long' };
    let dateCreated = Date.parse(user.created_at)
    dateCreated = new Intl.DateTimeFormat('en-US', options).format(dateCreated)


    function handleEditProfile(e){
        e.preventDefault()
        const profileObj = {
            username: editName, 
            avatar_url: avatarUrl,
            weekly_goal: parseInt(weeklyGoal)
        }
        fetch('/editprofile', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(profileObj)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(editedUser => setUser(editedUser)).then(setOpen(false))
            } else {
                res.json().then(err => setErrors(err.errors)).then(setOpen(true))
            }
        })
    }
    // console.log(`USER : ${user}`)
    console.log(errors)

    function handleClose(){
        setOpen(false)
        setEditName('')
        setAvatarUrl('')
        setWeeklyGoal('')
    }

  

    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.userName}><strong>{user.username}'s Account</strong></Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItems}>
                    <Avatar
                        className={classes.avatar}
                        alt={`${user.username}'s profile pic'`}
                        src={user.avatar_url}
                        sx={{ width: 56, height: 56}}
                    />
                </Grid>
                <Grid item xs={12} className={classes.gridItems}>
                    <Typography variant='h6'><strong>Member since {dateCreated}</strong></Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItems}>
                    <Typography variant='h6'>
                        <strong>Weekly goal: &nbsp;</strong>
                        <span className={classes.weeklyGoal}>
                            <strong>{user.weekly_goal} </strong>
                        </span>
                        <span>workouts per week</span>
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItems}>
                    <Button 
                    color="primary" 
                    variant="contained" 
                    endIcon={<EditIcon/>}
                    onClick={(editName === '' || weeklyGoal === '' ) ? () => setOpen(true) : () => setOpen(!open)}
                    // onClick={() => setOpen(true)}
                    >
                        Edit Profile
                    </Button>
                </Grid>
                <Modal
                open={open}
                onClose={!open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box className={classes.box}>
                             <IconButton
                             className={classes.exitButton}
                             onClick={handleClose}
                            //  color="primary" 
                             >
                                 <CloseIcon />
                            </IconButton>
                            <form type='submit' onSubmit={handleEditProfile} autoComplete="off">
                            <Typography className={classes.labels}>username:</Typography>
                            <input type='text' className={classes.formItems} value={editName} onChange={(e) => setEditName(e.target.value)}/>
                            <Typography className={classes.labels}>avatar url:</Typography>
                            <input type='text' className={classes.formItems} value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)}/>
                            <Typography className={classes.labels}>weekly goal:</Typography>
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
                            <Button
                             type='submit' 
                             color="primary" 
                             variant="contained" 
                             endIcon={<SaveAltIcon />}
                             >
                                save
                            </Button>
                        </form>
                        <br></br>
                        <br></br>
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
                    </Box>
                </Modal>
            </Grid>
        </Container>
    )
}

export default UserProfile