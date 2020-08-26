import { combineReducers } from 'redux';
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
                        return {...item, count: item.count + 1}
                    return item;
                })
        }
        case 'DECREASE_PRODUCT_COUNT':
            return {
                ...state,
                    products: state.products.map(item => {
                        if (item.count == 0 ) return null
                        if (item.id == action.id)
                            return {...item, count: item.count - 1}
                        
                        return item;
                    })
            }
            case 'RESET_PRODUCT_COUNT':
                return {
                    ...state,
                        products: state.products.map(item => {
                            if (item.id == action.id)
                                return {...item, count: 0}
                            return item;
                        })
                }
        default:
            return state;
    }
}

export default combineReducers({
    product
})