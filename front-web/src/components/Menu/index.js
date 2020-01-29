import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import './styles.scss';

export default function Menu(){
    return(
        <>
          <div className="navbar">
            <AppBar position="static">
              <Toolbar>
                <Fab color="secondary" aria-label="Add">
                    <AddIcon />
                </Fab>
                <Typography variant="h6" className="title">
                  VirtualStore
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        </>
    )
}