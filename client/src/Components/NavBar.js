import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { useHistory, useLocation } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';
import BuildIcon from '@material-ui/icons/Build';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ManageAccountsIcon from '@material-ui/icons/ManageAccounts';


const drawerWidth = '20%'
const useStyles = makeStyles({ 
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#2E2E38',
        color: grey[50]
    },
    active: {
        backgroundColor: '#2E2E38',
        fontWeight: 'bolder',
        fontSize: '20px'
    },
    logo: {
        padding: '10px',
        fontSize: '32px'
        // textAlign: 'center'
    },
    listItem: {
        // fontWeight: 'bolder',
        fontSize: '20px',
        "&:hover": {fontWeight: 'bold'}
    },
    signOut: {
        fontSize: '16px',
        marginTop: '20px',
        // textAlign: 'center'
        paddingLeft: '60px'
    }
})

function NavBar({ handleSignoutClick }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: "My Workout Buddy",
            icon: <FitnessCenterIcon  style={{ color: grey[50] }}/>,
            path: '/myworkoutbuddy'
        }, 
        {
            text: "Find Workouts",
            icon: <DirectionsRunIcon style={{ color: grey[50] }}/>,
            path: '/workouts'
        },
        {
            text: "Create Workouts",
            icon: <AssignmentIcon style={{ color: grey[50] }}/>,
            path: '/addworkout'
        },
        {
            text: "Account",
            icon: <AccountCircleIcon style={{ color: grey[50] }}/>,
            path: '/profile'
        }
        ]

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper: classes.drawerPaper}}
        >
            <Container>
                <Typography className={classes.logo} variant="h5"><strong>Workout Buddy</strong></Typography>
            </Container>
            <br></br>

            <List>
                {menuItems.map(item => (
                    <>
                    <ListItem 
                        key={item.text}
                        button
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null}
                    > 
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <Typography className={location.pathname == item.path ? classes.active : classes.listItem}>
                            {item.text}
                        </Typography>
                        {/* <ListItemText primary={item.text} className={classes.listItem}/> */}
                    </ListItem>
                    <br></br>
                    <br></br>
                    </>
                ))}
                <ListItem
                button>
                <ListItemIcon><ExitToAppIcon style={{ color: grey[50] }}/></ListItemIcon>
                    <Typography onClick={handleSignoutClick} className={classes.listItem} >
                        Sign Out
                    </Typography>
                </ListItem>
            </List>
        </Drawer>

    )
}

export default NavBar
