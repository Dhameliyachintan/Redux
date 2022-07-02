// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrementcounter, incrementcounter } from '../../Redux/Action/Counter.Action';

// function Counter(props) {

//     const count = useSelector(state => state.counter)
//     const dispatch = useDispatch()

//     const handleClickincrement = () =>{
//         dispatch(incrementcounter())
//     }

//     const handleClickdecrement = () =>{
//         dispatch(decrementcounter())
//     }

//     return (
//         <div>
//             <button onClick={() => handleClickincrement()}>+</button>
//             <p>{count.counter}</p>
//             <button onClick={() => handleClickdecrement()}>-</button>
//         </div>
//     );
// }

// export default Counter;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementcounter, incrementcounter } from '../../Redux/Action/Counter.Action';

function Counter(props) {
    const dispatch = useDispatch()
    const count  = useSelector(state => state.counter)

    const handleincrement = () => {
        dispatch(incrementcounter())
    }

    const handledecrement = () => {
        dispatch(decrementcounter())
    }


    return (
        <div>
            <button onClick={()=> handleincrement()}>plus</button>
            <p>{count.counter}</p>
            <button onClick={()=> handledecrement()}>-</button>
        </div>
    );
}

export default Counter;