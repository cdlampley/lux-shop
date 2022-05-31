import React from 'react';

export default function Bag(props) {
    const {bagItems} = props;
    return (
        <div>
            <h2>Bag Items</h2>
            <div>
                {bagItems.length === 0 && <div>Bag Is Empty</div>}
            </div>
        </div>
            
    )
}