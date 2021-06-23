import React from 'react';

import apiService from '../../../services/api.services';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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
  link: {
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const PostCard = () => {
  const classes = useStyles();
  
  const [posts, setPosts] = React.useState([]);

  const getPosts = async () => {
    try {
      const posts = await apiService.getPosts();

      setPosts(posts);
    } catch(error) {
      console.log(error)
    }
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
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
                  {post.institutionName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {post.job}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.description}
                </Typography>
              </Grid>
              <Grid item>
              <Link to={`/posts/${post._id}`} className={classes.link}>
                Saiba mais
              </Link>
              </Grid>
            </Grid>
            <Grid item>             
            </Grid>
          </Grid>
        </Grid>
      </Paper> 
    ))}
    </div>
 
  );
};

export default PostCard;