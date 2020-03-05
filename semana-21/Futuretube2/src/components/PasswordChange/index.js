import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TxtField, TxtFieldWrapper } from './styled'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {

    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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

    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>

        <TxtFieldWrapper>
          <TxtField>
            <TextField
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="New Password"
            />
          </TxtField>

          <TextField
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm New Password"
          />
        

        <Button disabled={isInvalid} type="submit">
          Reset My Password
        </Button>
        </TxtFieldWrapper>

        {error && <p>{error.message}</p>}

      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);