import React from 'react';
import { Routes as RoutesReactRouterDom, Route } from 'react-router-dom';
import { Home, Profile } from 'src/pages';
import { PATHS } from 'src/utils/constants';

export const Routes = () => {
  return (
    <RoutesReactRouterDom>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.PROFILE} element={<Profile />} />
    </RoutesReactRouterDom>
  );
};
