import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Skills from '../Skills/Skills'
import './About.css'

const About = () => {
    return (
        <Container className='about-container'>
            <Row className='about-row'>
                <Col md={5} className='d-flex flex-column about-col'>
                    <h3>About Me</h3>
                    <p className='about-text'>
                        im a self taught Front End Developper from France.
                        I build websites with a focus on providing the experience for everyone using them and responsiveness.
                        Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. 
                        A responsive design makes your website accessible to all users, regardless of their devices.
                    </p>
                    <Skills />
                </Col>
                <Col className='about-bg'></Col>
            </Row>
        </Container>
    )
}

export default About