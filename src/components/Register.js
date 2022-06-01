import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Auth } from 'aws-amplify';
import { useAppContext } from '../lib/contextLib';

const Register = () => {

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
            <div>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h2 className="display-6 fw-bolder text-center">Register</h2>
                        </div>
                        <div className="Login">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group
                                    className="mb-3"
                                    controlID="formFirstName">
                                    <Form.Label>
                                        First Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text" />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlID="formLastName">
                                    <Form.Label>
                                        Last Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text" />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="email">
                                    <Form.Label>
                                        Email Address
                                    </Form.Label>
                                    <Form.Control
                                        type="email" />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="password">
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password" />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    block="true"
                                    size="lg"
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!validateForm()}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register;