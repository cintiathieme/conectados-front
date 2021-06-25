import React from 'react';

import apiServices from '../../services/api.services';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import Header from '../../components/molecules/Header';
import SideBar from '../../components/organisms/SideBar';
import PostCard from '../../components/organisms/PostCard';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
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


const Posts = () => {
  const classes = useStyles();  
  
  const [user, setUser] = React.useState({});

  const getUser = async () => {
    try {     
      const user = await apiServices.getUser();
      console.log(user)
      setUser(user);      
    } catch(error) {
      console.log(error)
    }
  };

  React.useEffect(() => {
    getUser();
  }, []);
     
  return (
    <GeneralTemplate>
      {!apiServices.isAuthenticated() && <Header />}
      <Container className={classes.container} maxWidth="lg">
          <Box display="flex" justifyContent="center">
          {user.role === 'institution' && <SideBar />}                     
          <PostCard /> 
          </Box>
      </Container>
    </GeneralTemplate>        
  )
};

export default Posts;