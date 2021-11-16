import {useState} from 'react';

interface CounterProps {
    initialValueCounter: number
}

export const Counter = ({initialValueCounter}: CounterProps) => {
    const [counter, setCounter] = useState(initialValueCounter);

    const handleClick = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <>
            <h1>Counter {counter}</h1>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}