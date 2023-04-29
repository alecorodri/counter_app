import { useState } from 'react';
import PropTypes from 'prop-types'




export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value )

    const handAdd = (event, newValue) => {
        setCounter(counter + 1);
        //setCounter((c)=> c+1);
    }

    return (
        <>
            <h1> Counter App </h1>
            <h2> {counter} </h2>
            <button onClick={ handAdd }>
                +1

            </button>

        </>

    )
}

CounterApp.protoType = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}

