import React from 'react';

function Login() {
    // store an object with an error message and the name of the field
    const [errorMessages, setErrorMessages] = useState([]);

    // boolean value to indicate if the form is successfully submitted or not
    const [isSubmitted, setIsSubmitted] = useState(false);

    // generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // login form
    const renderForm = (
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">View password</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )

    const handleSubmit = (event) => {
        // prevent page reload
        event.preventDefault();
    }

    return (
        <div>

        </div>
    )
}

export default Login;