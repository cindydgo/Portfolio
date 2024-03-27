import { useState } from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"
import { IoMenu } from "react-icons/io5";
import "./Navbar.css"

const NavBar = () => {
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false)
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar 
            collapseOnSelect 
            expand="md"
            fixed="top" 
            className={navColour ? "navbar" : "navbar-top"} 
        >
        <Navbar.Brand href="/">
            <div className="logo"></div>
        </Navbar.Brand>
        <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <IoMenu className="navbar-toggle-icon"/>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/AboutPage">About</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
                <Nav.Link href="/Projects">Projects</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar