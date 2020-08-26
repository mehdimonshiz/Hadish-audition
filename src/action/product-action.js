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
// export const getProduct = ()=>{
//     return async dispatch => {
//         let fdata = new FormData()
//         return axios.get('https://run.mocky.io/v3/af969961-f71f-442b-89ee-409c28fc6d05', fdata)
//       .then((response) => {
//           dispatch({type:'GET_PRODUCT', products: response.data.products}
//           )
//           return response;
//       })
//         /*search api datas*/
//     }
// }
export  function getProducts(data) {
    return {type: 'GET_PRODUCT', products: data} 
}

   
// export function getProduct() {
//     return function action(dispatch) {
//       dispatch({ type: 'GET_PRODUCT' })
  
//       return axios.get('https://run.mocky.io/v3/af969961-f71f-442b-89ee-409c28fc6d05', fdata)
//       .then((response) => dispatch({type:'GET_PRODUCT', products: response.data.products})

//     }
//   }