import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const BagList = (props) => {

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
        <>
            
        </>
    )

}

export default BagList;