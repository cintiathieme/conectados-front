import axios from 'axios';


class ApiService {
    constructor() {
       this.api = axios.create({
           baseURL: process.env.REACT_APP_CONECTADOS_API_URL,
       });

       this.api.interceptors.request.use(config => {           
           if(config.url.includes('/auth') || config.url.includes('/home')) {
               return config;
           }
           config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

           return config;
       });

        this.api.interceptors.response.use(
            config => config,
            error => {
                if(error.response.status === 401 && error.response.data.type === 'Auth') {
                    localStorage.removeItem('token');                    
                    window.location.href='/signin';
                }
                return error;
            }   
       );
    }

    isAuthenticated = () => localStorage.getItem('token') !== null;

    home = async () => {
        const { data } = await this.api.get('/home');

        return data;
    }

    getPosts = async () => {       
        const { data } = await this.api.get('/post');

        return data;
        
    }

    createPost = async postData => {
        await this.api.post('/post/new-post', postData);
    }

    handleUpload = async imageFile => {
        const { data } = await this.api.post('/upload', imageFile);

        return data;
    }

    getPostDetail = async postId => {
        const { data } = await this.api.get(`/post/${postId}`);
        
        return data;
    }

    deletePost = async postId => {

        await this.api.delete(`/my-posts/${postId}`);
        
    }

    updatePost = async (postId, postData) => {
        const { data } = await this.api.put(`/my-posts/${postId}`, postData)

        return data;
    }

    myPosts = async () => {
        const { data } = await this.api.get('/my-posts');
       
        return data;
    }

    sendMessage = async (postId, messageData) => {
        await this.api.post(`/post/${postId}`, messageData);
    }

    getMessages = async () => {
        const { data } = await this.api.get('/message');

        return data;
    }

    addMessages = async (messageId, messageData) => {
        await this.api.put(`/message/${messageId}`, messageData);
    }

    getMessageDetail = async messageId => {
        const { data } = await this.api.get(`/message/${messageId}`);
        
        return data;
    }

    signupUser = async userData => {
        const { data } = await this.api.post('/auth/signup', userData);

        return data.message;
    }

    signinUser = async userData => {
        const { data } = await this.api.post('/auth/signin', userData);
        
        return data.message;
    }

    getUser = async () => {
        const { data } = await this.api.get('/post/userInfos');

        return data;
    }

    logout = () => {
        localStorage.removeItem('token');
        window.location.href='/';
    }

    
}

export default new ApiService();
