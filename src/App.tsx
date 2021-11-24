import React from 'react';

/* Importaciones propias */
import {Counter} from './bases/Counter';
import {CounterBy} from './bases/CounterBy';
import {CounterEffect} from './bases/CounterEffect';
import {CounterHook} from './bases/CounterHook';
import {CounterReducerComponent} from './counter-reducer/CounterReducer';

function App() {
    return (
        <>
            <Counter initialValueCounter={15}/>
            <CounterBy initialValueCounter={5}/>
            <CounterEffect/>
            <CounterEffect/>
            <CounterHook/>
            <CounterReducerComponent initialValueCounter={20}/>
        </>
    );
}

export default App;
