import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {

    return (
        <>
            <div>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h2 className="display-6 fw-bolder text-center">Register</h2>
                        </div>
                        <div className="Login">
                            <Form>
                                <Form.Group className="mb-3" controlID="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlID="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                <Button
                                block="true"
                                size="lg"
                                type="submit"
                                className="btn btn-primary">
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