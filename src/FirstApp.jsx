
const newMessage = {
    message: 'Hola Mundo',
    title: 'Aleco'
};

const getResult = () => {
    return JSON.stringify(newMessage.title);
} 


export const FirstApp = () => {

    

    return (
        <>
            <h1>{getResult()}</h1>
            {/* <code> { JSON.stringify(newMessage)} </code> */}
            <p>Subtitle</p>
        </>

    )
}
