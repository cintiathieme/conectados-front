import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from '@material-ui/core/IconButton';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const formSchema = Yup.object().shape({
    name: Yup.string('Digite seu nome').trim().required('Campo obrigatório'),
    email: Yup.string('Digite seu email').email('Formato inválido').trim().required('Campo obrigatório'),
    password: Yup.string('Digite sua senha').trim().min(4, 'Mínimo de 4 caracteres').required('Campo obrigatório'),
});


const SignupForm = ({ handleCreateUser }) => {
    const classes = useStyles();

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        type: 'volunteer'      
      },
      onSubmit: values => {
        handleCreateUser(values);
      },
      validationSchema: formSchema,
    });
   

    // const handleClickPassword = () => {
    //   setShowPassword({ showPassword: !showPassword })
    // }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Criar sua conta
          </Typography>
          <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField                  
                  name="name"
                  variant="outlined"                  
                  fullWidth
                  id="name"
                  label="Nome"
                  value={formik.values.name}                  
                  onChange={formik.handleChange}                  
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"                  
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}                  
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"                  
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}                  
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //       onClick={handleClickPassword}
                  //     >
                  //       {showPassword ? <Visibility /> : <VisibilityOff />}
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              </Grid> 
              <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Selecione:</FormLabel>
                <RadioGroup value={formik.values.type} onChange={formik.handleChange}>
                  <FormControlLabel name="type" value="volunteer" control={<Radio />} label="Voluntário" />
                  <FormControlLabel name="type" value="institution" control={<Radio />} label="Instituição" />                  
                </RadioGroup>
              </FormControl>
              </Grid>             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastre-se
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Tem uma conta? Conecte-se
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>        
      </Container>
    );
}; 

export default SignupForm;