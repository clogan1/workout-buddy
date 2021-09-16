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
        backgroundColor: '#2E2E38'
    },
    logo: {
        padding: '10px',
    },
    listItem: {
        fontWeight: 'bolder'
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
            text: "Workouts",
            icon: <DirectionsRunIcon  style={{ color: grey[50] }}/>,
            path: '/workouts'
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

            <List>
                {menuItems.map(item => (
                    <ListItem 
                        key={item.text}
                        button
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null}
                    > 
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} className={classes.listItem}/>
                    </ListItem>
                ))}
            </List>
            <br></br>
            <Button onClick={handleSignoutClick} >Sign Out</Button>

        </Drawer>

    )
}

export default NavBar
