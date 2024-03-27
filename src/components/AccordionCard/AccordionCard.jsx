import Accordion from 'react-bootstrap/Accordion';
import './AccordionCard.css'

function AccordionCard({desc}) {
  return (
    <Accordion defaultActiveKey="0" className='accordions'>
        <Accordion.Header>Description</Accordion.Header>
        <div>
          <Accordion.Body>
            <p>
              {desc}
            </p>
          </Accordion.Body>
        </div>
    </Accordion>
  );
}

export default AccordionCard;