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
    counter: 10,
    previous: 10,
    changes: 10
}
type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }
        default:
            return state;
    }
}

export const CounterReducerComponent = ({initialValueCounter}: CounterProps) => {
    const [{counter}, dispatch] = useReducer(counterReducer, initialState)

    const handleClick = () => {
        dispatch({type: 'reset'})
    }

    return (
        <>
            <h1>Counter Reducer {counter}</h1>

            <button onClick={handleClick}>
                Reset
            </button>
        </>
    )
}