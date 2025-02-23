import { ADD_TO_CART, REMOVE_FROM_CART } from "./action";
const initState = {
    addToCartData: [],

}
const cartReducer = (state = initState, action) => {
    console.log(state, "stateeeeeeee", action, "action type")
    if (action.type === ADD_TO_CART) {
       
        return {
            ...state,
            addToCartData: [...state.addToCartData, action.payload]
        };


    } if (action.type === REMOVE_FROM_CART) {
        return {
            ...state,
            addToCartData:[...state.addToCartData.filter((e)=>e.id!==action.payload.id)]

        }
    }
    else {
        return state;
    }


}

export default cartReducer;