import axios from 'axios'

export const increaseProduct = (id) => {
    return {type:'INCREASE_PRODUCT_COUNT', id }
}
export const decreaseProduct = (id) => {
    return {
        type:'DECREASE_PRODUCT_COUNT', id }
}
export const resetProduct = (id) => {
    return {
        type:'RESET_PRODUCT_COUNT', id }
}
export const addProduct = (name) => {
    return {
        type:'ADD_PRODUCT', name }
}

export  function getProducts(data) {
    return {type: 'GET_PRODUCT', products: data} 
}

   
