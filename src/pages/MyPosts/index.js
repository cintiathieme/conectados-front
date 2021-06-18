import React from 'react';

import apiService from '../../services/api.services';

import GeneralTemplate from '../../components/templates/GeneralTemplate';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const MyPosts = () => {
  const classes = useStyles();  
    
  const [myPosts, setMyPosts] = React.useState([]);

  const getMyPosts = async () => {
    try {
      const myPosts = await apiService.getMyPosts();

      setMyPosts(myPosts);
    } catch(error) {
      console.log(error)
    }
  };

  const deletePost = async id => {
    try {
      await apiService.deletePost(id);

      getMyPosts();
    } catch(error) {
      console.log(error)
    }
  }
  
    React.useEffect(() => {
      getMyPosts();
    }, []);

  return (
    <GeneralTemplate>
        <React.Fragment>      
        <Container className={classes.cardGrid} maxWidth="md">        
            <Grid container spacing={4}>
                {myPosts.map(post => (
                <Grid item key={post._id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={post.image}
                        title={post.job}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {post.job}
                        </Typography>
                        <Typography>
                        {post.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={deletePost(post._id)} >
                        <DeleteOutlinedIcon/>
                        </Button>
                        <Button size="small" color="primary">
                        Edit
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Container>          
        </React.Fragment>
    </GeneralTemplate>
  );
};

export default MyPosts;