import { useState } from 'react';
import PropTypes from 'prop-types'




export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = (event, newValue) => {
        setCounter(counter + 1);
        //setCounter((c)=> c+1);
    }

    const handleSubst = (event, newValue) => {
        setCounter(counter - 1);
    }

    const handleReset = (event, newValue) => {
        setCounter(value);
    }


    return (
        <>
            <h1> Counter App </h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubst}>-1</button>
            <button onClick={handleReset}>Reset</button>

        </>

    )
}

CounterApp.protoType = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}

