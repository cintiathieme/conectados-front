import React from 'react';

import apiService from '../../services/api.services';

import SignupForm from '../../components/organisms/SignupForm';
import AuthTemplate from '../../components/templates/AuthTemplate';

import FormHelperText from '@material-ui/core/FormHelperText';

const Signup = props => {
  const [show, setShow] = React.useState(false); 

  const handleCreateUser = async values => {
    try {
      console.log(values);      
      await apiService.signupUser(values);
      
      props.history.push('/signin')
    } catch (error) {
      setShow(true);
    }
  }

  return (    
    <AuthTemplate text="Criar sua conta">
      {show && (
          <FormHelperText style={{ color: 'red', fontSize: '14px' }}>
            * Email já cadastrado
          </FormHelperText>
      )}
    <SignupForm handleCreateUser={handleCreateUser} />
    </AuthTemplate>    
  );
};

export default Signup;