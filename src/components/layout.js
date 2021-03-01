import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import logo from '../assets/images/logo.png'
import { Link } from "gatsby";

export default class Layout extends Component {

    state = { scrolled: '' };
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount= () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll= () => {
        this.setState({scrolled: window.pageYOffset});
    }
    render() {
        const { scrolled } = this.state;
        let className = 'main-nav';
        if (scrolled > 6) {
            className += ' scrolled';
        }
        return (
            <div className={className}>
                <Navbar bg="#fff" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <Image src={logo} roundedCircle />
                            ميك اوردر
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/" className="nav-link">الرئيسية</Link>
                                <Link to="/features" className="nav-link">المميزات</Link>
                                <Link to="/pricing" className="nav-link">الأسعار</Link>
                                <Link to="/contact-us" className="nav-link">اتصل بنا</Link>
                            </Nav>
                            <div>
                                <Link to="/about" className="navbar-actions">الدخول</Link>
                                <Button variant="dark" className="mr-3 navbar-actions">نسخة تجريبية</Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

