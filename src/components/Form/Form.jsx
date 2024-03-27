import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import './Form.css'
import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

function FormBasic() {
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef =useRef();

    useEffect(() => emailjs.init("uavCAt87RQwuEH_uE"), []);

    const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_pl3hszk";
    const templateId = "template_una0i77";
    try {
        await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
        to_name: "Cindy D'agostino"
    });
        alert("message sent successfully");
    } catch (error) {
        console.log(error);
    }}
return (
    <Container className='form-container'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="name" 
                    placeholder="Enter your name " 
                    ref={nameRef}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email" 
                    placeholder="Enter email" 
                    ref={emailRef}
                />
                <Form.Text className="text-muted">
                    {`We'll never share your email with anyone else.`}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className='form-message'>Message</Form.Label>
                <textarea ref={messageRef}></textarea>
            </Form.Group>
            <Button 
                variant="danger" 
                type="submit"
                style={{width: "80%"}}
            >
                Submit
            </Button>
        </Form>
    </Container>
)} 

export default FormBasic;