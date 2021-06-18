import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import image from '../../../images/trabalho-voluntario.jpg';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      height: 500,
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      paddingRight: 100,
      backgroundImage: 'url(/images/trabalho-voluntario.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        margin: 50,
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(6),
          paddingRight: 0,
        },
    },
    button: {
        marginTop: 30,
        backgroundColor: '#00b8d4',        
    },
    
}));

const Header = () => { 
    const classes = useStyles();
return (
    <div >     
        <Paper className={classes.mainFeaturedPost}>   
            <Grid container >
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Juntos por um mundo melhor
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Conecte-se com instituições que precisam da sua ajuda
                        </Typography>
                        <Button className={classes.button} variant="outlined" color="primary">
                            <Link to="/signup" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>
                                Seja um voluntario
                            </Link>
                        </Button>                        
                    </div>
                </Grid>
            </Grid>
        </Paper>
    </div>
)
};

export default Header;