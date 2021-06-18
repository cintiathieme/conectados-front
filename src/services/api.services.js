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

    getPostDetail = async postId => {
        const { data } = await this.api.get(`/post/${postId}`);
        
        return data;
    }

    deletePost = async postId => {
        await this.api.delete(`/my-posts/${postId}`);
    }

    updatePost = async postId => {
        const { data } = await this.api.put(`/my-posts/${postId}`)

        return data;
    }

    myPosts = async () => {
        const { data } = await this.api.get('/my-posts');

        return data;
    }

    sendMessage = async messageData => {
        await this.api.post('/post/postDetail', messageData);
    }

    // getMessages = async () => {
    //     const { data } = await this.api.get('/messages');

    //     return data;
    // }

    signupUser = async userData => {
        await this.api.post('/auth/signup', userData);
    }

    signinUser = async userData => {
        const { data } = await this.api.post('/auth/signin', userData);

        return data.message;
    }
}

export default new ApiService();
