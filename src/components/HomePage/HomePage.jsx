import { FaGithub } from "react-icons/fa";
import Container from "react-bootstrap/Container"
import TextEffect from '../TextEffect/TextEffect';
import './HomePage.css'

const HomePage = () => {
    return(
        <Container>
            <h1>Hello ! <span className='wave'>👋🏾</span></h1>
            <h2>{`I'm Cindy D'agostino`}</h2>
            <div className="card"> 
                <TextEffect />
            </div>
            <button onClick={() => {
                window.open("https://github.com/cindydgo");
            }}
                className="github-btn">
                <FaGithub className="github-btn-icon"/>
            </button>
        </Container>
    )
}

export default HomePage