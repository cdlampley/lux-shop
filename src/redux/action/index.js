// for add item to bag
export const addBag = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// for delete item from bag
export const delBag = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}
