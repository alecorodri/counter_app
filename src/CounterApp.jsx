import PropTypes from 'prop-types'




export const CounterApp = ({ value }) => {

    const handAdd = (event, newValue) => {
        
    }

    return (
        <>
            <h1> Counter App </h1>
            <h2> {value} </h2>
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

