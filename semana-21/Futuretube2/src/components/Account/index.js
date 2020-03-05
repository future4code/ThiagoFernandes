import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import { Wrapper, UserName } from './styled'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (

      <Wrapper>
        <h3>Welcome, <UserName>{authUser.email}</UserName>!</h3>
        
        <PasswordForgetForm />

        <PasswordChangeForm />
        
      </Wrapper>

    )}
  </AuthUserContext.Consumer>

);


const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);