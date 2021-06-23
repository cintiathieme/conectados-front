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


const useStyles = makeStyles((theme) => ({
    root: {   
        backgroundColor: '#FFFFFF',    
        height: 'auto',        
        marginTop: theme.spacing(5),       
    },
    title: {
        backgroundColor: '#00A170'
    },
    messageArea : {
        margin: theme.spacing(3)
    },    
    paper: {
        width: theme.spacing(40),
        marginTop: theme.spacing(2),
        backgroundColor: '#F5F5F5'
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

    const getMessageDetail = async () => {
        try {
            const message = await apiService.getMessageDetail(props.match.params.id); 
            const messageCollection = await message.messageCollection;

            setMessage(message);
            setmessageCollection(messageCollection);
        } catch (error) {
            console.log(error);
        }
    };
    
    React.useEffect(() => {
        getMessageDetail();
    }, []);
    
    const handleAddMessage = async values => {
        try {
          console.log(values);
          await apiService.addMessages(props.match.params.id, values);
          
          props.history.push('/')
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
                    <Typography variant="overline" >{message.volunteerName}</Typography>
                </div>
                <div className={classes.messageArea}>
                    <Typography component="div">{messageCollection.map(m => (
                        <Paper key={m._id} elevation={3} className={classes.paper}>{m.message}</Paper>))}
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