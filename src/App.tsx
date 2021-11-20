import React from 'react';

/* Importaciones propias */
import {Counter} from './bases/Counter';
import {CounterBy} from './bases/CounterBy';
import {CounterEffect} from './bases/CounterEffect';

function App() {
    return (
        <>
            <Counter initialValueCounter={15}/>
            <CounterBy initialValueCounter={5}/>
            <CounterEffect/>
            <CounterEffect/>
        </>
    );
}

export default App;
