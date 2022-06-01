import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Auth } from 'aws-amplify';
import { useAppContext } from '../lib/contextLib';


const Login = () => {

    const { userHasAuthenticated } = useAppContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="display-6 fw-bolder text-center">Login</h2>
                    </div>
                    <div className="Login">
                        <Form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <Form.Group size="lg"
                                    controlId="email">
                                    <Form.Label
                                        className="form-label">
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </div>
                            <div className="mb-3">
                                <Form.Group size="lg"
                                    controlId="password">
                                    <Form.Label
                                        className="form-label">
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                            </div>
                            <Button
                                block="true"
                                size="lg"
                                type="submit"
                                className="btn btn-primary"
                                disabled={!validateForm()}>
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;