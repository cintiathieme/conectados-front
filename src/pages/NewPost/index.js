import React from 'react';

import apiService from '../../services/api.services';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import NewPostForm from '../../components/organisms/NewPostForm';

const NewPost = props => {
    const handleCreatePost = async values => {
        try {         
          await apiService.createPost(values);         
          
          props.history.push('/posts')
        } catch (error) {
        console.log(error);
        }
    };   
    
    return (
        <GeneralTemplate>
            <NewPostForm handleCreatePost={handleCreatePost} />       
        </GeneralTemplate>
    );
};

export default NewPost;

