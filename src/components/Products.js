import React, { useState, useEffect } from 'react';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Jewelry</button>
                    <button className="btn btn-outline-dark me-2">Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4">
                            <div class="card h-100 text-center p-4" key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title} height="300px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                                    <p className="card-text lead fw-bold">
                                        ${product.price}
                                    </p>
                                    <a href="#" className="btn btn-outline-dark">Add to bag</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row"></div>
                <div className="row justify-content-center">
                    <ShowProducts />
                </div>
            </div>
        </div>
    )
};

export default Products;