import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import apiServices from '../../../services/api.services';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles((theme) => ({
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


const NewPostForm = ({ handleCreatePost }) => {
    const classes = useStyles();
    
    const [image, setImage] = React.useState();
    
    const handleFileUpload = e => {
      const uploadData = new FormData();

      uploadData.append('imageUrl', e.target.files[0]);
      
      apiServices.handleUpload(uploadData)
        .then(response => {
          setImage(response.secure_url)
        })
      }
      console.log(image)
      
    const formik = useFormik({
      initialValues: {
        imageUrl: '',
        description: '',
        job: '',
        type: ''           
      },
      onSubmit: values => {
        handleCreatePost(values)      
      },
      validationSchema: formSchema,
    });
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>          
          <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField                  
                  name="imageUrl"
                  variant="outlined"                  
                  fullWidth
                  id="imageUrl"
                  label="Imagem"
                  type="file"
                  InputLabelProps={{ shrink: true }}
                  value={formik.values.imageUrl}                  
                  onChange={e => handleFileUpload(e)}                  
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
              <FormControl component="fieldset">
                <FormLabel component="legend">Tipo:</FormLabel>
                <RadioGroup value={formik.values.type} onChange={formik.handleChange}>
                  <FormControlLabel name="type" value="recurrent" control={<Radio />} label="Recorrente" />
                  <FormControlLabel name="type" value="once" control={<Radio />} label="Pontual" />                  
                </RadioGroup>
              </FormControl>
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
    );
}; 

export default NewPostForm;