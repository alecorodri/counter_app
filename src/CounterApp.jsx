import PropTypes from 'prop-types'




export const CounterApp = ({ value }) => {


    return (
        <>
            <h1> Counter App </h1>
            <div>
                <h2> {value} </h2>
            </div>

        </>

    )
}

CounterApp.protoType = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}