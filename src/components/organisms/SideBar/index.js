import React from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
// import { createFilterOptions } from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 250, 
        height:'100%',       
        marginRight: theme.spacing(10),
      },     
      button: {
        width: '100%',
        backgroundColor: '#00b8d4',        
    },
    

  }));

const SideBar = () => {
    const classes = useStyles();

  return (    
    <Paper elevation={3} className={classes.root}>       
          <Button className={classes.button} variant="outlined" color="primary">
            <Link to="/new-post" style={{ textDecoration: 'none', color: 'primary', fontWeight: 'bold'}}>
                Novo Post
            </Link>
          </Button> 
          <Button className={classes.button} variant="outlined" color="primary">
            <Link to="/my-posts" style={{ textDecoration: 'none', color: 'primary', fontWeight: 'bold'}}>
                Meus Posts
            </Link>
          </Button>     
    </Paper>

  );

}

export default SideBar;
