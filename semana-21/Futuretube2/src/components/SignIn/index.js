import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Wrapper, Form, WelcomeMsg, TxtField, Btn } from './styled'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


const SignInPage = () => (

  <Wrapper>
    <WelcomeMsg>Welcome to FutureTube</WelcomeMsg>
    <SignInForm />

    <PasswordForgetLink />
    <SignUpLink />

  </Wrapper>

);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {

    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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

    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (

      <Form onSubmit={this.onSubmit}>

        <TxtField>
          <TextField
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </TxtField>

        <TxtField>
          <TextField
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </TxtField>

        <Btn>
          <Button
            disabled={isInvalid}
            type="submit"
            variant="contained"
            color="primary">
            Sign In
        </Button>
        </Btn>

        {error && <p>{error.message}</p>}
      </Form>

    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };