import React from 'react';

import apiServices from '../../services/api.services';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import Header from '../../components/molecules/Header';

import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    width: 500,
    marginBottom: theme.spacing(2),
  },
  image: {
    width: 128,
    height: 128,
    marginRight: 10,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  link: {
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));


const Home = () => {
  const classes = useStyles();
  
  const [posts, setPosts] = React.useState([]);
  
  const home = async () => {
    try {
      const posts = await apiServices.home();

      setPosts(posts);        
    } catch(error) {
      console.log(error)
    }
  };

  React.useEffect(() => {
    home();
  }, []);
     
  return (
    <GeneralTemplate>
      {!apiServices.isAuthenticated() && <Header />}
      <Container className={classes.container} maxWidth="lg">
          <Box display="flex" justifyContent="center">                          
            <div>
              {posts.map(post => (    
              <Paper className={classes.paper} key={post._id}>
                  <Grid container >
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={post.imageUrl} />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            {post.institutionName}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {post.job}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {post.description}
                          </Typography>
                        </Grid>                        
                      </Grid>                      
                    </Grid>
                  </Grid>
                </Paper> 
              ))}
              </div>
          </Box>
      </Container>
    </GeneralTemplate>        
  )
};

export default Home;