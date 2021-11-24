import {useReducer} from 'react';

/* Importaciones propias */
import {CounterProps, CounterState} from './interfaces/interfaces';
import {counterReducer} from './reducer/counterReducer';

export const initialState: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducerComponent = ({initialValueCounter}: CounterProps) => {
    const [counterState, dispatch] = useReducer(counterReducer, initialState)

    const handleReset = () => {
        dispatch({type: 'reset'});
    }

    const increaseBy = (value: number) => {
        dispatch({type: 'increaseBy', payload: {value}});
    }

    return (
        <>
            <h1>Counter Reducer Seg</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>

            <button onClick={() => increaseBy(1)}>
                +1
            </button>

            <button onClick={() => increaseBy(5)}>
                +5
            </button>

            <button onClick={() => increaseBy(10)}>
                +10
            </button>

            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}