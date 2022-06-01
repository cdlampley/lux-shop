import React, { useState, useEffect } from 'react';



const Bag = () => {

    const [bag, setBag] = useState([])
    const [product, setProduct] = useState([]);
    let componentMounted = true;

    useEffect(() => {
        const getBag = async () => {
            const res = await fetch('https://fakestoreapi.com/carts');
            if (componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
            }

            return () => {
                componentMounted = false;
            }
        }
        getBag();
    })

    // add item to cart
    const addItem = (item) => {
        let cart = [...bag]
        cart.push({ ...item })
        product.map((i) => {
            if (i.id == item.id) {
                i.bag = true
            }
        })
        setBag(cart)
    }
    // delete item from cart
    const delItem = (item) => {
        let cart = bag.filter((x) => x.id != item.id)
        product.map((i) => {
            if (i.id == item.id) {
                i.bag = false
            }
        })
        setBag(cart)

    }
    // increase items in cart
    const increase = (item) => {
        let x = bag.map((i) => {

            if (item.id == i.id) {
                i.quantity += 1
            }
            return i
        })

        setBag(x)
    }
    // decrease items in cart
    const decrease = (item) => {
        let x = bag.map((i) => {

            if (item.id == i.id && i.qty > 1) {
                i.quantity -= 1
            }
            return i
        })
    }

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="display-6 fw-bolder text-center">Shopping Bag</h2>
                    </div>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bag.map((i, index) => {

                                    < tr key={i.id}>
                                        <th scope="row">{index + 1}</th>
                                        <th scope="row">
                                            <img src={i.url} style={{ width: '4rem' }} />
                                        </th>
                                        <td>{i.name}</td>
                                        <td>
                                            {i.price}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => decrease(i)}
                                                className="btn btn-primary btn-sm"
                                            >
                                                -
                                            </button>
                                            {i.quantity}
                                            <button
                                                onClick={() => increase(i)}

                                                className="btn btn-primary btn-sm"
                                                size="sm"
                                            >
                                                +
                                            </button>
                                        </td>

                                        <td>
                                            <button onClick={() => delItem(i)} className="btn btn-danger">
                                                Remove
                                            </button>
                                        </td >
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <h4>Total: {total()}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Bag;