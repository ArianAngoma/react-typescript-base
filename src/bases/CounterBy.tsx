import {useState} from 'react';

interface CounterProps {
    initialValueCounter: number
}

export const CounterBy = ({initialValueCounter}: CounterProps) => {
    const [counterState, setCounterState] = useState({
        counter: initialValueCounter,
        clicks: 0
    });

    const handleClick = (value: number) => {
        setCounterState(prev => ({
            counter: prev.counter + value,
            clicks: prev.clicks + 1
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