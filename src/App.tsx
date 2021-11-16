import React from 'react';

/* Importaciones propias */
import {Counter} from './bases/Counter';
import {CounterBy} from './bases/CounterBy';

function App() {
    return (
        <>
            <Counter initialValueCounter={15}/>
            <CounterBy initialValueCounter={5}/>
        </>
    );
}

export default App;
