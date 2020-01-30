import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from "@material-ui/core/styles";
import './styles.scss';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: '90%'
  }
}));

export default function Menu(){

  const classes = useStyles();

  return(
    <>
      <div className="navbar">

        <AppBar position="static" >

          <Toolbar>
            
            <Typography variant="h6" className="title" >
              <NavLink to="/" > VirtualStore </NavLink>
            </Typography>

            <Fab color="secondary" aria-label="Add" className={classes.button}>
              <NavLink to="/add"><AddIcon/></NavLink>
            </Fab>
          
          </Toolbar>
        
        </AppBar>

      </div>
    </>
  )
}