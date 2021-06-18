import React from 'react';
import { Link } from 'react-router-dom';

import apiService from '../../services/api.services';

import LoggedTemplate from '../../components/templates/LoggedTemplate';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),   

  },
  paper: {   
    maxWidth: '700px',
    margin: `${theme.spacing(1)}px auto`,
  },

}));


const Message = () => {
  const classes = useStyles();  
  
  const [messagesList, setMessageList] = React.useState([]);
   
  
  const getMessages = async () => {
    try {
      const messagesList = await apiService.getPosts();

      setMessageList(messagesList);
    } catch(error) {
      console.log(error)
    }
  };
  
  React.useEffect(() => {
    getMessages();
  }, []);    
    
  return (
    <LoggedTemplate>
      <div className={classes.root}> 
        <Paper className={classes.paper}>
          <TableContainer>
            <Table  size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="right">Data</TableCell>                                
                </TableRow>
              </TableHead>
              <TableBody>
                {messagesList.map((message) => (
                  <TableRow hover key={message._id}>
                    <TableCell component="th" scope="row">
                  <Link to={`/messages/${message._id}`} style={{ textDecoration: 'none'}}>
                      {message.job}
                  </Link>
                    </TableCell>
                    <TableCell align="right">{message.updatedAt}</TableCell>                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </LoggedTemplate>
  )
};

export default Message;
