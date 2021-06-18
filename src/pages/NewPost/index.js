import React from 'react';

import apiService from '../../services/api.services';

import LoggedTemplate from '../../components/templates/LoggedTemplate';
import NewPostForm from '../../components/organisms/NewPostForm';

const NewPost = props => {
    const handleCreatePost = async values => {
        try {
          console.log(values);
          await apiService.createPost(values);
          
          props.history.push('/posts')
        } catch (error) {
        console.log(error);
        }
    };   
    
    return (
        <LoggedTemplate>
            <NewPostForm handleCreatePost={handleCreatePost} />       
        </LoggedTemplate>
    );
};

export default NewPost;

