import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
    image: Yup.string().trim(),
    description: Yup.string().required('Campo obrigatório'),
    job: Yup.string().required('Campo obrigatório'),
  });

const ModalEditPost = ({ selectedPost, open, handleClose, handleUpdatePost }) => {  
    const id = open ? 'simple-popover' : undefined;
 
    const classes = useStyles();  

      const formik = useFormik({
        initialValues: {
            image: selectedPost.image,
            description: selectedPost.description,
            job: selectedPost.job,           
          },     
        onSubmit: (values) => {
          handleUpdatePost(selectedPost._id, values);          
        },
        validationSchema: formSchema,
      }); 

    return (
        <Popover
                      id={id}
                      open={open}
                      anchorEl={null}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>          
                          <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <TextField                  
                                  name="image"
                                  variant="outlined"                  
                                  fullWidth
                                  id="outilined-multiline-flexible"
                                  label="Imagem"
                                  type="file"
                                  InputLabelProps={{ shrink: true }}
                                  value={formik.values.image}                  
                                  onChange={formik.handleChange}                  
                                  error={formik.touched.image && Boolean(formik.errors.image)}
                                  helperText={formik.touched.image && formik.errors.image}
                                />
                              </Grid>       
                              
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"                  
                                  fullWidth
                                  name="job"
                                  label="Vaga"                  
                                  id="job"
                                  value={formik.values.job}
                                  onChange={formik.handleChange}                  
                                  error={formik.touched.job && Boolean(formik.errors.job)}
                                  helperText={formik.touched.job && formik.errors.job}                  
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  variant="outlined"                  
                                  fullWidth
                                  id="description"
                                  label="Descrição do trabalho"
                                  name="description"
                                  rows={4}
                                  multiline
                                  value={formik.values.description}
                                  onChange={formik.handleChange}                  
                                  error={formik.touched.description && Boolean(formik.errors.description)}
                                  helperText={formik.touched.description && formik.errors.description}
                                />
                              </Grid>               
                            </Grid>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}                              
                            >
                              Enviar
                            </Button>            
                          </form>
                        </div>        
                      </Container>
                    </Popover>
    )
};

export default ModalEditPost;