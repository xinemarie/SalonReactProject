import React, { Component } from 'react';
import { Button, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import BookModal from './ModalComponent';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar dark sticky="top" expand="md">
                <div className="container-fluid">
                    <NavbarBrand href="/"><img src="/assets/images/logo.jpg" height="100" width="100" alt="Lavender Salon" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="topBottomBordersOut navbar-nav ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link d-block d-sm-none" to='/book'>Book Appointment</NavLink>
                            </NavItem>
                            <Button className="btn btn-secondary text-nowrap d-none d-sm-block" to='/book'>Book Appointment</Button>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;