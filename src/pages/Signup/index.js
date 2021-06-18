import React from 'react';

import apiService from '../../services/api.services';

import SignupForm from '../../components/organisms/SignupForm';
import Footer from '../../components/molecules/Footer';

const Signup = props => {
  const handleCreateUser = async values => {
    try {
      console.log(values);      
      await apiService.signupUser(values);
      
      props.history.push('/signin')
    } catch (error) {
    console.log(error);
    }
  }

  return (
    <>
    <SignupForm handleCreateUser={handleCreateUser} />
    <Footer />
    </>
  );
};

export default Signup;