import React, { useEffect } from 'react'
 import "../styles/productList.css"
import { useDispatch, useSelector } from 'react-redux'
import { getProduct,addToCart } from '../redux/actionType'

const ProductList = () => {
    const dispatch = useDispatch()
    const  data = useSelector((state) => state)

    // console.log(data.cart.addToCartData, "product Data")
    // console.log(data.product.productData,"cart data added")
    const url = "https://fakestoreapi.com/products"

    const fetchProductData = (url) => {
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                dispatch(getProduct(result))
                return result
            }).catch((err) => {
                console.log(err, "error")
            })

    }


    useEffect(() => {
        fetchProductData(url)
    }, [])

    return (
        <>
            <h1>Hello product</h1>
            <div className='container'>
                {data.product.productData?.map((e) => {
                  return(
                      <div className='card' key={e.id}>
                          <img src={e.image} />
                          <h6>{e.title}</h6>
                          <h4>{e.category}</h4>
                          <h4>{e.price}</h4>
                          <button onClick={()=>dispatch(addToCart(e))}>Add To cart</button>
                        
                      </div>
                  )
                })}
              

            </div>
        </>
    )
}

export default ProductList
