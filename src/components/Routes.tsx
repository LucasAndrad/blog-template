import React from 'react';
import { Routes as RoutesReactRouterDom, Route } from 'react-router-dom';
import { Home, Profile } from 'src/pages';

export const Routes = () => {
  return (
    <RoutesReactRouterDom>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </RoutesReactRouterDom>
  );
};
