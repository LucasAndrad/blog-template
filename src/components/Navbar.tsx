import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { PATHS } from 'src/utils/constants';
import styled from 'styled-components';
import { Button } from './Button';
import Grid from '@mui/material/Grid';

const Container = styled.div`
  a {
    text-decoration: none;
  }
`;

export const Navbar = () => {
  return (
    <Container>
      <Toolbar disableGutters>
        <AppBar sx={{ maxHeight: '75px', padding: '0 20px' }}>
          <Grid container spacing={3}>
            <Grid item>
              <Link to={PATHS.HOME}>
                <Button sx={{ color: 'white', height: '50px' }}>Home Page</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to={PATHS.PROFILE}>
                <Button sx={{ color: 'white', height: '50px' }}>Profile Page</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to={PATHS.POKEAPI}>
                <Button sx={{ color: 'white', height: '50px' }}>PokeAPI</Button>
              </Link>
            </Grid>
          </Grid>
        </AppBar>
      </Toolbar>
    </Container>
  );
};
