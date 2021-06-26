import React from 'react';
import { useFormik } from 'formik';

import apiService from '../../services/api.services';

import GeneralTemplate from '../../components/templates/GeneralTemplate';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {   
        backgroundColor: '#FFFFFF',    
        height: 'auto',        
        marginTop: theme.spacing(5),       
    },
    title: {
        backgroundColor: '#4791db',
        height: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        paddingLeft: theme.spacing(2)

    },
    messageArea : {
        margin: theme.spacing(3),        
    },    
    paper: {
        width: theme.spacing(40),
        marginTop: theme.spacing(2),
        padding: theme.spacing(2)               
    },
    formArea: {
        margin: theme.spacing(3)
    },
    textArea: {
        width: theme.spacing(50),
    },
    submitArea: {       
        display: 'flex',
        alignItems: 'center'
    },
    submit: {
        width: theme.spacing(3),
        marginLeft: theme.spacing(2)
      },

}));

const MessageDetails = props => {    
    const classes = useStyles();    
    const [message, setMessage] = React.useState({});
    const [messageCollection, setmessageCollection] = React.useState([]);
    const [user, setUser] = React.useState('');

    const getMessageDetail = async () => {
        try {
            const message = await apiService.getMessageDetail(props.match.params.id); 
            const messageCollection = await message.messageCollection;
            const user = await apiService.getUser()
            const userId = user._id;           

            setMessage(message);
            setmessageCollection(messageCollection);
            setUser(userId); 
        } catch (error) {
            console.log(error);
        }
    };
    
    React.useEffect(() => {
        getMessageDetail();
    }, []);
    
    const handleAddMessage = async values => {
        try {          
          await apiService.addMessages(props.match.params.id, values);
          
          props.history.push('/messages')
        } catch (error) {
        console.log(error);
        }
        };

    const formik = useFormik({
        initialValues: {
            message: ''         
        },
        onSubmit: values => {
            handleAddMessage(values);
        },        
        });  
        
    return (
        <GeneralTemplate>
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Typography component="div" className={classes.root}>
                <div className={classes.title}>
                    <Typography variant="h6" >{user === message.volunteer ? message.institutionName : message.volunteerName} </Typography>
                </div>
                <div className={classes.messageArea}>
                    <Typography component="div">{messageCollection.map(m => (
                        <Box display="flex" style={{justifyContent: user === m.author ? 'flex-end' : 'flex-start'}}>
                            <Paper key={m._id} elevation={3} className={classes.paper} style={{backgroundColor: user === m.author ? '#DCF8C6' : '#FFF'}}>
                                <Typography >{m.message}</Typography>
                                <Typography variant="body2" color="textSecondary" >{m.date}</Typography>
                            </Paper>
                        </Box>))}
                    </Typography>
                </div>
                <div className={classes.formArea}>
                    <form noValidate onSubmit={formik.handleSubmit}>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.submitArea}>
                    <TextareaAutosize 
                        aria-label="minimum height" 
                        className={classes.textArea}
                        rowsMin={10}
                        name="message" 
                        placeholder="Envie uma mensagem"
                        value={formik.values.message}                  
                        onChange={formik.handleChange}                
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >
                        Enviar
                        </Button>
                    </Typography>
                        </form>            
                </div>

                </Typography>
            </Container>
        </React.Fragment>
           
        </GeneralTemplate>
    )
};

export default MessageDetails;