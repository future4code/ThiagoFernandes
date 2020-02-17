import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { PasswordLostTxt, ResetPassForm, Wrapper } from './styled'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PasswordForgetPage = () => (
  <Wrapper>
    <h2>Forgot your password?</h2>
    <p>Insert your e-mail and we'll send you a reset password link!</p>
    <PasswordForgetForm />
  </Wrapper>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {

    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const { email, error } = this.state;
    const isInvalid = email === '';

    return (

      <ResetPassForm onSubmit={this.onSubmit}>
        <TextField
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />

        <Button disabled={isInvalid} type="submit">
          Reset my password!
        </Button>

        {error && <p>{error.message}</p>}

      </ResetPassForm>

    );
  }
}

const PasswordForgetLink = () => (

  <PasswordLostTxt>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </PasswordLostTxt>

);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };