import { combineReducers } from 'redux';
import store from '../store';
const product = (state = {}, action) => {
    switch (action.type) {

        case 'GET_PRODUCT':
            return {
                ...state,
                products: action.products
            }
        case 'INCREASE_PRODUCT_COUNT':
            return {
                ...state,
                products: state.products.map(item => {
                    if (item.id == action.id)
                        return { ...item, count: item.count + 1 }
                    return item;
                })
            }
        case 'DECREASE_PRODUCT_COUNT':
            return {
                ...state,
                products: state.products.map(item => {

                    if (item.id == action.id) {
                        if (item.count == 0) return null
                        return { ...item, count: item.count - 1 }
                    }

                    return item;
                }).filter(item => item !== null)
            }
        case 'RESET_PRODUCT_COUNT':
            return {
                ...state,
                products: state.products.map(item => {

                    if (item.id == action.id) {
                        if (item.count == 0) return null
                        return { ...item, count: 0 }
                    }
                    return item;
                }).filter(item => item !== null)
            }
        case 'ADD_PRODUCT':
            console.log('GGGGGGGG::::',  state.products.concat({name: action.name, count: 1, id:String(state.products.length + 1)  })
            )
            return {
                ...state,
                products: state.products.concat({name: action.name, count: 1, id: String(state.products.length + 1)})
            }
        default:
            return state;
    }
}

export default combineReducers({
    product
})