import React from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import postCardImage from '../../images/Trabalho-Voluntário.jpg';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const postsList = [
    {_id: "1", name: 'post1'},
    {_id: "2", name: 'post2'},
    {_id: "3", name: 'post3'},
    {_id: "4", name: 'post4'},
];

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        maxWidth: 345,    
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
}));

const PostDetail = props => {
    const classes = useStyles();    
    const [post, setPost] = React.useState({});

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    React.useEffect(() => {
        const foundPost = postsList.find(post => {
            return post._id === props.match.params.id
        });
        
        setPost(foundPost)
    })
    return (
        <GeneralTemplate>
        <Box display="flex" justifyContent="center">
             <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                    }                    
                    title={post.name}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={postCardImage}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Decrição: Procura-se volutário para ajudar na distribuição de alimentos. 
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                
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
        <Typography variant="body2" color="textSecondary" component="p">
          <TextareaAutosize aria-label="minimum height" className={classes.textArea}rowsMin={10} placeholder="Descreva suas habilidades e disponibilidade de horários" />
          </Typography>
        </CardContent>
      </Collapse>
            </Card> 
            </Box>       
        </GeneralTemplate>

    )
};

export default PostDetail;





