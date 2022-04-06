import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { posts } from './postsExample';
import { Button } from './Button';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const PostsList = () => {
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [page, setPage] = useState(1);
  const [postsOnPage, setPostsOnPage] = useState<any>([]);

  useEffect(() => {
    const firstPost = (page - 1) * itemsPerPage;

    const newPostsOnPage = posts.slice(firstPost, firstPost + itemsPerPage);
    setPostsOnPage(newPostsOnPage);
  }, []);

  return (
    <Container>
      {/* Next step add Grid component */}
      <Grid container spacing={5}>
        {postsOnPage.map((post: any) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant='h5'>{post.title}</Typography>
                <Typography variant='body2'>{post.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Grid container spacing={2} alignItems="center" justifyContent="flex-end" mt="20px" mb="50px">
        <Grid item xs="auto">
          <Button variant='contained'>
            {'<'}
          </Button>
        </Grid>
        <Grid>
          <Typography variant="body2">
            {`Page: ${page}`}
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Button variant='contained'>
            {'>'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
