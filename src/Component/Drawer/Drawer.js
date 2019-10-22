import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { firebaseApp } from '../../Config/Firebase/firebase'
import { FaUserCircle, FaHome, FaHandHoldingHeart, FaConnectdevelop, FaBell, FaUsersCog, FaPowerOff } from "react-icons/fa";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    
 const logOut = () => {
  firebaseApp.auth().signOut().then((user) => {
    console.log('successfull', user)
    props.path.push('/')
  })
    .then((error) => {
        console.log(error)
    })
 }
console.log(props.currentUser)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            The Life Line Blood Bank
          </Typography>
        </Toolbar>
      </AppBar>



      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </div>
        


        <Divider />
       <h5> <FaUserCircle /> {props.currentUser.fistName +" " + props.currentUser.lastName}</h5>
       <h5>  B.Group : { props.currentUser.bloodGroup}</h5>
        <List>
            <ListItem button key={'Home'} onClick={()=> props.path.push('home')}>
              <ListItemIcon ><FaHome /></ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>

            <ListItem button key={'My Requests'} onClick={()=> props.path.push('myrequest')}>
              <ListItemIcon><FaHandHoldingHeart /></ListItemIcon>
              <ListItemText primary={'My Requests'} />
            </ListItem>

            <ListItem button key={'Post Requirement'} onClick={()=> props.path.push('bloodrequired')}>
              <ListItemIcon><FaConnectdevelop /></ListItemIcon>
              <ListItemText primary={'Post Requirement'} />
            </ListItem>

            <ListItem button key={'Notification'}>
              <ListItemIcon><FaBell /></ListItemIcon>
              <ListItemText primary={'Notification'} />
            </ListItem>

            
            <ListItem button key={'Settings'}>
              <ListItemIcon><FaUsersCog /></ListItemIcon>
              <ListItemText primary={'Settings'} />
            </ListItem>

            <ListItem button key={'Log Out'} onClick={()=> logOut()}>
              <ListItemIcon><FaPowerOff /></ListItemIcon>
              <ListItemText primary={'Log Out'} />
            </ListItem>
        </List>

        <Divider />

      </Drawer>
       
      
    </div>
  );
}