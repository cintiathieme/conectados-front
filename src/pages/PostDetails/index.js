import React from 'react';
import { useFormik } from 'formik';

import apiService from '../../services/api.services'

import GeneralTemplate from '../../components/templates/GeneralTemplate';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        maxWidth: 345,
        marginTop: 30,    
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    textArea: {
        width: 300,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
}));

const PostDetail = props => {
    const classes = useStyles();

    const [post, setPost] = React.useState({});
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getPostDetail = async () => {
        try {
            const post = await apiService.getPostDetail(props.match.params.id);
            console.log(post)

            setPost(post);
        } catch (error) {
            console.log(error);
        }
    };    

    React.useEffect(() => {
       getPostDetail();
    }, []);

    const handleCreateMessage = async values => {
        try {
          console.log(values);
          await apiService.sendMessage(props.match.params.id, values);
          
          props.history.push('/posts')
        } catch (error) {
        console.log(error);
        }
        };

    const formik = useFormik({
        initialValues: {
            messageCollection: ''         
        },
        onSubmit: values => {
            handleCreateMessage(values);
        },        
        });
    
   
    return (
        <GeneralTemplate>
        <Box display="flex" justifyContent="center">
             <Card className={classes.root}>
                <CardHeader                              
                    title={post.institutionName}
                    subheader={post.updatedAt}
                />
                <CardMedia
                    className={classes.media}
                    image={post.image}
                    title={post.institution}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Decrição: Procura-se volutário para ajudar na distribuição de alimentos. 
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Quero me conectar
                    </Typography>
                
                <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        </CardActions>      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <form noValidate onSubmit={formik.handleSubmit}>
        <Typography variant="body2" color="textSecondary" component="p">
          <TextareaAutosize 
            aria-label="minimum height" 
            className={classes.textArea}
            rowsMin={10}
            name="message" 
            placeholder="Descreva suas habilidades e disponibilidade de horários"
            value={formik.values.message}                  
            onChange={formik.handleChange}                 
            />
          </Typography>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Enviar
            </Button>
            </form>            
        </CardContent>
      </Collapse>
            </Card> 
            </Box>       
        </GeneralTemplate>

    )
};

export default PostDetail;