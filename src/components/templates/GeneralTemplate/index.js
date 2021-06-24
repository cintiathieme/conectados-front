import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../atoms/Footer';

import apiServices from '../../../services/api.services';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 30',
        backgroundColor: '#00b8d4',
     
    },       
    user: {
        display: 'flex',
        alignItems: 'center',
    },
    accountCircle: {
        marginLeft: '30px',
    },
    mailIcon: {
        margin: '0 30px',
    },        
});

const GeneralTemplate = ({ children }) => {
    const classes = useStyle();    

    return (
        <>
            <AppBar position="sticky">
                <Toolbar className={classes.toolBar}>
                    <div>
                        <h3><Link to={apiServices.isAuthenticated() ? '/posts' : '/'} style={{ textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Conectados</Link></h3>
                    </div>
                    <div className={classes.user}>
                        {apiServices.isAuthenticated() ? 
                        (<>
                        <Link to="/messages" style={{ textDecoration: 'none', color: 'white'}}>
                             <MailIcon className={classes.mailIcon} />
                        </Link>                                               
                        <Button style={{color: 'white'}} onClick={() => apiServices.logout()}>
                            <ExitToAppIcon />
                        </Button>
                        </>) :                          
                        (<>
                            <Link to="/signup" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold'}}>Cadastre sua Instuição</Link>                      
                            <Link to="/signin" style={{ textDecoration: 'none', color: 'white'}}>
                                <AccountCircle className={classes.accountCircle}/>
                            </Link>
                        </>)}                       
                    </div>
                </Toolbar>
            </AppBar>
            {children}
           <Footer/>
        </>
    )
}

export default GeneralTemplate;