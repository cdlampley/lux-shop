import React, { useRef } from 'react';



const Bag = ({
    bag,
    addItem,
    delItem,
}) => {

    const refContainer = useRef();
    const total = (arr) => {
        return arr.reduce((cal, item) => {
            return cal + item.price * item.amount;
        }, 0);
    };

    const Dollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })



    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <div
                            ref={refContainer}
                            onClick={(e) => e.stopPropagation()}>
                            <h2 className="display-6 fw-bolder text-center">Shopping Bag</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Bag;