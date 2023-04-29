import PropTypes from 'prop-types'


const newMessage = {
    message: 'Hola Mundo',
    title: 'Aleco'
};

const getResult = () => {
    return JSON.stringify(newMessage.title);
} 


export const FirstApp = ( {title, subtitle, name} ) => {

    // console.log(props);


    return (
        <>
            <h1> {title} </h1>
            {/* <code> { JSON.stringify(newMessage)} </code> */}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>

    )
}

FirstApp.protoType = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    title: ' no hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'Aleco Rodri'
}