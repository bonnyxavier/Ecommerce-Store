import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { incrementButton } from '../redux/Test/test.actions'

function Test() {

    const dispatch = useDispatch()
    const value = useSelector((state)=>state.incrementReducer)

    const incrementByOne = ()=>{
        dispatch(incrementButton())
    }

    return (
        <div>
            <button onClick={incrementByOne}>Increment 1</button>
            <div>{`value is : ${value}`}</div>
        </div>
    )
}

export default Test
