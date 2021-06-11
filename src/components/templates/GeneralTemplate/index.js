import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../molecules/Footer';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';

const useStyle = makeStyles({
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 30',
        backgroundColor: '#00b8d4',
     
    },
    mailIcon: {
        margin: '0 30px',
    },
    user: {
        display: 'flex',
        alignItems: 'center',
    }
});

const GeneralTemplate = ({ children }) => {
    const classes = useStyle();

    return (
        <>
            <AppBar position="sticky">
                <Toolbar className={classes.toolBar}>
                    <div>
                        <h3><Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Conectados</Link></h3>
                    </div>
                    <div className={classes.user}>
                        <Link to="/signup" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold'}}>Cadastre sua Instuição</Link>
                        <MailIcon className={classes.mailIcon} />
                        <AccountCircle />
                    </div>
                </Toolbar>
            </AppBar>
            {children}
           <Footer/>
        </>
    )
}

export default GeneralTemplate;