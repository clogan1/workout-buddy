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


const drawerWidth = '20%'
const useStyles = makeStyles({ 
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    active: {
        backgroundColor: 'gray'
    }
})

function NavBar() {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: "My WorkoutBuddy",
            icon: <FitnessCenterIcon />,
            path: '/myworkoutbuddy'
        }, 
        {
            text: "Workouts",
            icon: <DirectionsRunIcon />,
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
            <div>
                <Typography variant="h5">Workout Buddy</Typography>
            </div>

            <List>
                {menuItems.map(item => (
                    <ListItem 
                        key={item.text}
                        button
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null}
                    > 
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

        </Drawer>

    )
}

export default NavBar
