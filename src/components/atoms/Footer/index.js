import React from 'react';
import { Link } from 'react-router-dom';

import apiServices from '../../../services/api.services';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Footer = () => {    
  return (
    <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to={apiServices.isAuthenticated() ? "/posts" : "/"}>
            Conectados
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>          
    </Box>
  );
};

export default Footer;
