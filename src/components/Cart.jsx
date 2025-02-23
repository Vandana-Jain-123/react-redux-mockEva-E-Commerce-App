import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/productList.css"
import { removeToCart } from '../redux/actionType'

const Cart = () => {
  const selectedData = useSelector((state) => state)
  console.log(selectedData.cart.addToCartData, "checkkkk")
   const dispatch = useDispatch()
  return (
    <>
      <div className='container'>
        {selectedData.cart.addToCartData.map((e) => {
          return (
            <div className='card' key={e.id}>
              <img src={e.image} />
              <h6>{e.title}</h6>
              <h4>{e.category}</h4>
              <h4>{e.price}</h4>
              <button onClick={() => dispatch(removeToCart(e))}>Remove</button>
            </div>
          )
       
        })}

      </div>

    </>
  )
}

export default Cart
