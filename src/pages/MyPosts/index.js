import React from 'react';

import ModalEditPost from '../../components/organisms/ModalEditPost';
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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const MyPosts = props => {
  const classes = useStyles();  
  
  const [selectedPost, setSelectedPost] = React.useState({});
  const [myPosts, setMyPosts] = React.useState([]);
  const [open, setOpen] = React.useState(false);


  const getMyPosts = async () => {
    try {
      const myPosts = await apiService.myPosts();
      

      setMyPosts(myPosts);
    } catch(error) {
      console.log(error)
    }
  };

  React.useEffect(() => {
    getMyPosts();
  }, []);

  const deletePost = async id => {
    try {
      await apiService.deletePost(id);

      await getMyPosts();
    } catch(error) {
      console.log(error)
    }
  };

    const handleOpen = (post) => {
      setSelectedPost(post);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      setSelectedPost({});
    };   
    

    const handleUpdatePost = async (id, values) => {
      try {  
          
        await apiService.updatePost(id, values);
        handleClose();
        await getMyPosts();
      } catch (error) {
        console.log(error);
      }
    };
    
     

  return (
    <GeneralTemplate>        
        <Container className={classes.cardGrid} maxWidth="md">        
            <Grid container spacing={4}>
                {myPosts.map(post => (
                <Grid item key={post._id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={post.imageUrl}
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
                      <Button size="small" color="primary" onClick={() => deletePost(post._id)} >
                        <DeleteOutlinedIcon/>
                      </Button>
                      <Button aria-describedby="simple-popover" variant="contained" color="primary" onClick={() => handleOpen(post)} id={post._id}>
                      Edit
                      </Button>
                      
                  </CardActions>
                  </Card>
                </Grid>
                ))}
                {open && <ModalEditPost selectedPost={selectedPost} open={open} handleClose={handleClose} handleUpdatePost={handleUpdatePost}/>}
            </Grid>
            </Container>        
      
    </GeneralTemplate>
  );
};

export default MyPosts;