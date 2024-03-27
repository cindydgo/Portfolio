import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AccordionCard from '../AccordionCard/AccordionCard';
import Container from 'react-bootstrap/Container'
import projects from '../../data'
import './Card.css';

function Cards() {
    return (
        <Container className='cards-container'>
        <h2 className="project-title">My Projects</h2>
        <div className="d-flex justify-content-center flex-wrap project-container">
            {projects.map((project) => (
                <div className='position-relative' key={project.id}>
                    <Card 
                        className="card-project"
                    >
                    <Card.Img variant='top' 
                        src={project.image.src} 
                        style={{height: 140}}
                        alt={project.image.alt}
                    />
                    <Card.Body className='card-body'>
                        <Card.Title>{project.title}</Card.Title>
                        <AccordionCard desc={project.description}/>
                        <div className='card-buttons'>
                            <Button 
                                variant="primary" 
                                href={project.link} 
                                target="_blank"
                            >
                                Demo
                            </Button>
                            <Button 
                                variant="secondary" 
                                href={project.github}
                                target="_blank"
                            >
                                Github
                            </Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    </Container>
)}      

export default Cards;