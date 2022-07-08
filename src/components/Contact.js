import React from 'react'

const Contact = () => {

    return (

        <div>
            <div className="container my-5 py-5">
                <h1 className="display-6 fw-bolder text-center">Contact</h1>
                <div class="col">
                <div>
                    <label for="formGroupExampleInput" className="col-sm-2 col-form-label">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" />
                </div>
                <div>
                    <label for="inputEmail4" className="col-sm-2 col-form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div className="form-floating mt-3">
                    <textarea className="form-control" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>
                <button type="button" className="btn btn-primary btn-lg mt-3">Submit</button>
                </div> 
            </div>
        </div>
    )
}

export default Contact