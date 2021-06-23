import React from 'react';

import apiServices from '../../services/api.services';

import SigninForm from '../../components/organisms/SigninForm';
import AuthTemplate from '../../components/templates/AuthTemplate';

import FormHelperText from '@material-ui/core/FormHelperText';


const Signin = props => {
  const [show, setShow] = React.useState(false);  

  const handleSignin = async values => {
    try {
      const token = await apiServices.signinUser(values);
      localStorage.setItem('token', token);
      // props.updateRole(role)
      // localStorage.setItem('role', role)

      props.history.push('/posts')
            
    } catch (error) {
      if (error) { 
        setShow(true);
      }
    }
  }

  return (
    <AuthTemplate text="Entrar">
      {show && (
          <FormHelperText style={{ color: 'red', fontSize: '14px' }}>
            * Email e/ou senha inválidos
          </FormHelperText>
      )}
      <SigninForm handleSignin={handleSignin} />    
    </AuthTemplate>
  )
};

export default Signin;

