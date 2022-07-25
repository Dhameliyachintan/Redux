import React, { useReducer } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { decrementcounter, incrementcounter } from '../../Redux/Action/Counter.Action';
import { counterReducer } from '../../Redux/Reducer/Counter.reducer';

function Counter(props) {
    // const [state] = useReducer(counterReducer)

    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleClickincrement = () => {
        dispatch(incrementcounter())
    }

    const handleClickdecrement = () => {
        dispatch(decrementcounter())
    }


    return (
        <div>
            <button onClick={() => handleClickincrement()}>+</button>
            <p>{count.counter}</p>
            <button onClick={() => handleClickdecrement()}>-</button>
            {/* <button onClick={() => dispatch({
                value: Math.floor(Math.random() * 101)
            })}>-</button> */}
        </div>
    );
}

export default Counter;

