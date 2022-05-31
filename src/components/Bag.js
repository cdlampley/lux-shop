import React from 'react';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';



const Bag = (props) => {

    const { bagItems, onAdd, onRemove } = props;
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <Skeleton />
            </>
        )
    } 

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="display-6 fw-bolder text-center">Shopping Bag</h2>
                    </div>
                    <div>
                {bagItems.length === 0 &&
                    <div>
                        Cart Is Empty
                    </div>}
            </div>
            {bagItems.map((item) => (
                <div key={item.id} className="row">
                    <div>{product.title}</div>
                    <div>
                        <button onClick={() => onAdd(item)} className="add">
                            +
                        </button>
                        <button onClick={() => onRemove(item)} className="remove">
                            -
                        </button>
                    </div>
                    <div>
                        {product.qty} x ${product.price.toFixed(2)} 
                    </div>
                </div>
            ))}
                </div>
            </div>

        </div>
    )
}

export default Bag;