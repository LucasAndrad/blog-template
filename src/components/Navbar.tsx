import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from 'src/utils/constants';
import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
  a {
    text-decoration: none;
  }
`;

export const Navbar = () => {
  return (
    <Container>
      <Link to={PATHS.HOME}>
        <Button variant='contained'>Home Page</Button>
      </Link>
      <Link to={PATHS.PROFILE}>
        <Button variant='contained'>Profile Page</Button>
      </Link>
    </Container>
  );
};
