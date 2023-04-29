
const newMessage = {
    message: 'Hola Mundo',
    title: 'Aleco'
};

const getResult = () => {
    return JSON.stringify(newMessage.title);
} 


export const FirstApp = ( {title = 'Soy Aleco'} ) => {

    // console.log(props);

    return (
        <>
            <h1> {title} </h1>
            {/* <code> { JSON.stringify(newMessage)} </code> */}
            <p>Subtitle</p>
        </>

    )
}

