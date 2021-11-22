import {useReducer} from 'react';

interface CounterProps {
    initialValueCounter: number
}

interface CounterState {
    counter: number,
    previous: number,
    changes: number
}

const initialState: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducerComponent = ({initialValueCounter}: CounterProps) => {
    const [] = useReducer()

    const handleClick = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <>
            <h1>Counter Reducer {counter}</h1>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}