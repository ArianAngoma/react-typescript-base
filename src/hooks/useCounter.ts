import {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';

const MAXIMUM_COUNT = 10;

export const useCounter = () => {
    const [counter, setCounter] = useState(5);

    const counterElementHTML = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMUM_COUNT));
    }

    useEffect(() => {
        if (counter < 10) return;
        console.log('%cSe llego el valor máximo', 'color: red; background-color: black;');

        const tl = gsap.timeline();

        tl.to(counterElementHTML.current, {y: -10, duration: 0.2, ease: 'ease.out'});
        tl.to(counterElementHTML.current, {y: 0, duration: 1, ease: 'bounce.out'});

    }, [counter]);

    return {
        counter,
        counterElementHTML,
        handleClick
    }
}