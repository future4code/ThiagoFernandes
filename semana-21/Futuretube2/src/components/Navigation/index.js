import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Lista, ListaItem } from './indexStyled';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <Wrapper>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </Wrapper>
);

const NavigationAuth = () => (
  <Wrapper>
    <Lista>

      <ListaItem>
        <Link to={ROUTES.SIGN_IN}>Login</Link>
      </ListaItem>

      <ListaItem>
        <Link to={ROUTES.LANDING}>Início</Link>
      </ListaItem>

      <ListaItem>
        <Link to={ROUTES.HOME}>Home</Link>
      </ListaItem>

      <ListaItem>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </ListaItem>

      <ListaItem>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </ListaItem>

      <ListaItem>
        <SignOutButton />
      </ListaItem>

    </Lista>
  </Wrapper>
);

const NavigationNonAuth = () => (
  <Lista>

    <ListaItem>
      <Link to={ROUTES.LANDING}>Início</Link>
    </ListaItem>

    <ListaItem>
      <Link to={ROUTES.SIGN_IN}>Login</Link>
    </ListaItem>
    
  </Lista>
);

export default Navigation;