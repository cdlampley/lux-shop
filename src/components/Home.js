import React from 'react';
import Products from './Products';

const Home = () => {

    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913_1280.jpg" className="card-img" alt="Background Image" height="600px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container text-dark">
                        <h5 className="card-title display-3 fw-bolder mb-3">
                            LUX SHOP
                        </h5>
                        <p className="card-text lead fs-2">
                            Check out our latest trends
                        </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home;