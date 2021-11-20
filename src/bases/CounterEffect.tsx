import {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);

    const counterElementHTML = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        /*if (counter < MAXIMUM_COUNT) {
            setCounter(prev => prev + 1);
        }*/

        setCounter(prev => Math.min(prev + 1, MAXIMUM_COUNT));
    }

    useEffect(() => {
        if (counter < 10) return;
        console.log('%cSe llego el valor máximo', 'color: red; background-color: black;');

        const tl = gsap.timeline();

        tl.to(counterElementHTML.current, {y: -10, duration: 0.2, ease: 'ease.out'});
        tl.to(counterElementHTML.current, {y: 0, duration: 1, ease: 'bounce.out'});

    }, [counter]);

    return (
        <>
            <h1>CounterEffect {counter}</h1>
            <h2 ref={counterElementHTML}>{counter}</h2>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}