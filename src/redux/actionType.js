import { 
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_LOADING,
    FETCH_PRODUCTS_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    PLACE_ORDER,

} from "./action";

export const getProduct=(product)=>{
    return{
        type:FETCH_PRODUCTS_SUCCESS,
        payload: product
    }
}

export const loadProduct = () => {
    return {
        type: FETCH_PRODUCTS_LOADING

    }
}

export const failureProduct = () => {
    return {
        type: FETCH_PRODUCTS_FAILURE
    }
}

export const addToCart = (addToCartDatas) => {
    return {
        type: ADD_TO_CART,
        payload: addToCartDatas

    }
}
export const removeToCart = (deletedata) => {
    return {
        type: REMOVE_FROM_CART,
        payload:deletedata
        
    }
}


export const updateQuantity = () => {
    return {
        type:UPDATE_QUANTITY
    }
}

export const orderPlace = () => {
    return {
        type:PLACE_ORDER
    }
}