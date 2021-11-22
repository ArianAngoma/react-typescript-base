import {useCounter} from '../hooks/useCounter';

export const CounterHook = () => {

    const {counter, counterElementHTML, handleClick} = useCounter();

    return (
        <>
            <h1>Counter Hook {counter}</h1>
            <h2 ref={counterElementHTML}>{counter}</h2>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}