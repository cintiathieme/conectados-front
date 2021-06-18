import React from 'react';
import apiService from '../../services/api.services'

import LoggedTemplate from '../../components/templates/LoggedTemplate';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
}));

const MessageDetails = props => {    
    const classes = useStyles();    
    const [message, setMessage] = React.useState({});    

    const getMessageDetail = async () => {
        try {
            const message = await apiService.getPostDetail(props.match.params.id);

            setMessage(message);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
       getMessageDetail();
    }, []);
        
    return (
        <LoggedTemplate>
           {message.job}
        </LoggedTemplate>
    )
};

export default MessageDetails;