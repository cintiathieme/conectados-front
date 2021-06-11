import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Link from '@material-ui/core/Link';
import postCardImage from '../../../images/Trabalho-Voluntário.jpg';

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

const PostCard = ({ posts }) => {
  const classes = useStyles();  

  return (
    <div>
    {posts.map(post => (    
    <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={postCardImage} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {post.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Vaga
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  descrição:
                </Typography>
              </Grid>
              <Grid item>
              <Link href="#">
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
 
  );
};

export default PostCard;