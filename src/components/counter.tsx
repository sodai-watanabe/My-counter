import React, { DetailedHTMLProps, DetailedReactHTMLElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../features/counterSlice';
import { RootState } from '../app/store';


// type Props = {
//   channelName: string | null;
// };

const Counter = () => {
    const count :number = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
            <span>{count}</span>
        </div>
    )

}

export default Counter
