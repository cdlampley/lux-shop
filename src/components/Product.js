import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
        }
        getProduct();
    }, []);

    const ShowProduct = () => {
        return (
            <>
            <div className="col-md-6 mb-5">
                    <img src={product.image} alt={product.title} height="500px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star ms-2"></i>
                    </p>
                </div>             
            </>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <ShowProduct />
                </div>
            </div>
        </div>
    )
}

export default Product;