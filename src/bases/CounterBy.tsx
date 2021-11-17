import {useState} from 'react';

interface CounterProps {
    initialValueCounter: number
}

interface CounterState {
    counter: number,
    clicks: number
}

export const CounterBy = ({initialValueCounter}: CounterProps) => {
    const [counterState, setCounterState] = useState<CounterState>({
        counter: initialValueCounter,
        clicks: 0
    });

    const handleClick = (value: number) => {
        setCounterState(({counter, clicks}) => ({
            counter: counter + value,
            clicks: clicks + 1
        }));
    }

    return (
        <>
            <h1>Counter By {counterState.counter}</h1>
            <h1>Clicks: {counterState.clicks}</h1>

            <button onClick={() => handleClick(1)}>
                +1
            </button>

            <button onClick={() => handleClick(5)}>
                +5
            </button>
        </>
    )
}