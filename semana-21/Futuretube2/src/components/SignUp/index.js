/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Txt, Wrapper, SignUpArea, TxtField } from './styled'

const SignUpPage = () => (
    <Wrapper>
        <h1>Futuretube 2.0</h1>
        <p>Create the future. Join Futuretube.</p>
        <SignUpForm />
    </Wrapper>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                    });
            })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (

            <SignUpArea onSubmit={this.onSubmit}>
                <TxtField>
                    <TextField
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                    />
                </TxtField>
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
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                </TxtField>
                <TxtField>
                    <TextField
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </TxtField>

                <Button disabled={isInvalid} type="submit">
                    Sign Up
                    </Button>

                {error && <p>{error.message}</p>}
            </SignUpArea>
        );

    }

}

const SignUpLink = () => (
    <Txt>
        <Link to={ROUTES.SIGN_UP}>Create your account!</Link>
    </Txt>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };