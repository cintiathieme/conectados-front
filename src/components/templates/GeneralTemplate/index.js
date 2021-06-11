import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';

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

const GeneralTemplate = () => {
    const classes = useStyle();

    return (
        <>
            <AppBar position="sticky">
                <Toolbar className={classes.toolBar}>
                    <div>
                        <h3>Conectados</h3>
                    </div>
                    <div className={classes.user}>
                        <Button color="white" href="#">Cadastre sua Instuição</Button>
                        <MailIcon className={classes.mailIcon} />
                        <AccountCircle />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default GeneralTemplate;