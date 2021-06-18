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
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
      button: {
        width: '100%',
        backgroundColor: '#00b8d4',        
    },
    

  }));

const FilterBar = () => {
    const classes = useStyles();

  return (    
    <Paper elevation={3} className={classes.root}>
       <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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

export default FilterBar;
