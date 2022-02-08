import React from 'react';
import { Routes as RoutesReactRouterDom, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <RoutesReactRouterDom>
      <Route path='/' element={() => <div>Home page</div>} />
      <Route path='/pages' element={() => <div>Another page</div>} />
    </RoutesReactRouterDom>
  );
};
