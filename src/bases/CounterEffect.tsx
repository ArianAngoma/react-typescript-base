import {useEffect, useState} from 'react';
import {gsap} from 'gsap';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        /*if (counter < MAXIMUM_COUNT) {
            setCounter(prev => prev + 1);
        }*/

        setCounter(prev => Math.min(prev + 1, MAXIMUM_COUNT));
    }

    useEffect(() => {
        if (counter < 10) return;
        console.log('%cSe llego el valor máximo', 'color: red; background-color: black;');
        gsap.to('h2', {y: -10, duration: 0.2, ease: 'ease.out'}).then(() => {
            gsap.to('h2', {y: 0, duration: 1, ease: 'bounce.out'});
        });
    }, [counter]);

    return (
        <>
            <h1>CounterEffect {counter}</h1>
            <h2>{counter}</h2>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}