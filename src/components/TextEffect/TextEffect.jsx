import Typewriter from "typewriter-effect";

const TextEffect = () => {
    return(
        <Typewriter 
        className="description"
            options={{
            strings: [
                "React Js Developer",
                "UI Developer",
                "Javascript Developer",
                "Front End Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
            }}
        />
    )
}

export default TextEffect