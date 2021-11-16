import {useState} from "react";

export const Counter = ({initialValueCounter = 0}) => {
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