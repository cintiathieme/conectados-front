import React from 'react';
import apiServices from '../../services/api.services';

import { Link } from 'react-router-dom';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import SideBar from '../../components/organisms/SideBar';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
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
}));


const Posts = () => {   
    const classes = useStyles();
  
    const [posts, setPosts] = React.useState([]);
  
    const getPosts = async () => {
      try {
        const posts = await apiServices.getPosts();
  
        setPosts(posts);
      } catch(error) {
        console.log(error)
      }
    };
  
    React.useEffect(() => {
      getPosts();
    }, []);   
    return (
        <>
            <GeneralTemplate>
                
                <Container maxWidth="lg">
                    <Box display="flex" justifyContent="center">
                        <SideBar />
                        <div>
    {posts.map(post => (    
    <Paper className={classes.paper} key={post._id}>
        <Grid container >
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={post.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {post._id}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {post.job}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  descrição:
                </Typography>
              </Grid>
              <Grid item>
              <Link to={`/posts/${post._id}`}>
                Saiba mais
              </Link>
              </Grid>
            </Grid>
            <Grid item>
              <StarBorderIcon />
            </Grid>
          </Grid>
        </Grid>
      </Paper> 
    ))}
    </div>
                    </Box>
                </Container>
            </GeneralTemplate>
        </>
    )
};

export default Posts;