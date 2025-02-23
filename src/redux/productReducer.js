import {
    FETCH_PRODUCTS_SUCCESS,

} from "./action";
const initialState = {
    productData:[]
}
const productReducer = (state = initialState, action) => {
    // console.log(state,"stateeeeeee",action,"actionn")
    if (action.type == FETCH_PRODUCTS_SUCCESS) {
        return {
           ...state, productData: action.payload
        }
    }else{
        return state;
    }

   
}

export default productReducer;