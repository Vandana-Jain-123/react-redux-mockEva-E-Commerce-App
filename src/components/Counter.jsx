import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { increment, storeData,decrement, addData } from './redux/actionTYpe'
import { useSelector } from 'react-redux'

const Counter = () => {
    const value = useSelector((state) => state)
    console.log(value, "value")
    const dispatch = useDispatch()
    // console.log(dispatch)
    //    const user={
    //     A:"",
    //     B:""
    //    }
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const fetchData = (url) => {
        return (fetch(url)
            .then(response => response.json())
            .then((result) => {
                return result
            })
            .catch((err) => {
                console.log(err, "error")
            })
        )
    }

    useEffect(() => {
        fetchData(url)
            .then((result) => {
                dispatch(storeData(result))
            })
    }, [])

    return (
        <div>

            {value.count}
            <button onClick={() => dispatch(increment(50))}>inc</button>
            <button onClick={() => dispatch(decrement(10))}>decre</button>
            <button onClick={()=>dispatch(storeData([]))}>clearData</button>

{value.addData}
            <input type="text" placeholder='enterData'  value={value.addData} onChange={(e)=>dispatch(addData(e.target.value))}/>

        </div>
    )
}

export default Counter
