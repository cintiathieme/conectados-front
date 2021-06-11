import React from 'react';
import GeneralTemplate from '../../components/templates/GeneralTemplate';
import PostCard from '../../components/organisms/PostCard';
import Header from '../../components/molecules/Header';
import FilterBar from '../../components/organisms/FilterBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from  '@material-ui/core/styles';

const postsTest = [
    {id: 1, name: 'post1'},
    {id:2, name: 'post2'},
    {id: 3, name: 'post3'},
    {id: 4, name: 'post4'},
];

const useStyles = makeStyles({
    container: {
        backgroundColor: 'green'
    },
    main: {
        height: '100vh',
        padding: 24,
    
    }
})
const Home = () => {
    const classes = useStyles();

    return (
        <>
            <GeneralTemplate />
            <Header />
            <Container maxWidth="lg">
            <Box display="flex" justifyContent="center">
                <FilterBar />
                <PostCard posts={postsTest} />
            </Box>
            </Container>
        </>
    )
};

export default Home;