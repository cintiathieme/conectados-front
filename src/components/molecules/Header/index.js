import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import image from '../../../images/trabalho-voluntario.jpg';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      height: 500,
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      paddingRight: 100,
      backgroundImage: 'url(https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2016/09/23141940/trabalho-voluntario.jpg)',
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
                            Encontre a forma de ajudar que mais se adequa a você 
                        </Typography>
                        <Button className={classes.button} variant="contained" color="primary" href="#contained-buttons">
                           Seja um voluntario
                        </Button>                        
                    </div>
                </Grid>
            </Grid>
        </Paper>
    </div>
)
};

export default Header;