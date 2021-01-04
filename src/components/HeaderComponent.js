import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, NavItem,
    Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label,
    Button, Collapse
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                {/* navbar */}
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
                                    <NavLink className="nav-link d-block d-sm-none" to='/book'><Button color="link" onClick={this.toggleModal}>Book Appointment</Button></NavLink>
                                </NavItem>
                                <Button className="btn btn-secondary text-nowrap d-none d-sm-block" onClick={this.toggleModal}>Book Appointment</Button>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                {/* modal */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>BOOK APPOINTMENT</ModalHeader>
                    <ModalBody>
                        <Form className="book-modal-form">
                            <FormGroup>
                                <Input type="name" className="form-control" id="firstName" autocomplete="off" required />
                                <Label className="form-control-placeholder" htmlFor="firstName">First Name</Label>
                            </FormGroup>
                            <FormGroup>
                                <Input type="name" className="form-control" id="lastName" autocomplete="off" required />
                                <Label className="form-control-placeholder" htmlFor="lastName">Last Name</Label>
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" className="form-control" id="emailBook" autocomplete="off" required />
                                <Label className="form-control-placeholder" htmlFor="emailBook">Email Address</Label>
                            </FormGroup>
                            <FormGroup>
                                <Input type="tel" className="form-control" id="phoneNumber" autocomplete="off" required />
                                <Label className="form-control-placeholder" htmlFor="phoneNumber">Phone Number</Label>
                            </FormGroup>
                            <FormGroup>
                                <Label className="select-form-control-placeholder" htmlFor="service" />
                                <Input classname="form-control" type="select" name="service" id="service" required>
                                    <option selected disable value>Pick a service...</option>
                                    <option>Women's haircut</option>
                                    <option>Men's haircut</option>
                                    <option>Beard trim</option>
                                    <option>Child's cut 12 and under</option>
                                    <option>Shampoo only</option>
                                    <option>Deep conditioning treatment</option>
                                    <option>Treatment with blowout</option>
                                    <option>Base color only</option>
                                    <option>Base color and haircut</option>
                                    <option>All over color and haircut</option>
                                    <option>Gloss only</option>
                                    <option>Foil highlights, gloss, and haircut</option>
                                    <option>Color, foil highlight, and haircut</option>
                                    <option>Balayage, gloss, and haircut</option>
                                    <option>Balayage/ombré/color melting</option>
                                    <option>Artistic vivid coloring</option>
                                    <option>Brazilian blowout smoothing treatment</option>
                                    <option>Brazilian blowout *long hair</option>
                                    <option>Extension installation</option>
                                    <option>Extension adjustment</option>
                                    <option>Extension removal</option>
                                    <option>Simple blowout</option>
                                    <option>Blowout and curled</option>
                                    <option>Brow wax</option>
                                    <option>Lip wax</option>
                                    <option>Chin wax</option>
                                    <option>Brow and lip wax</option>
                                    <option>Lip and chin wax</option>
                                    <option>Sideburns</option>
                                    <option>Ears</option>
                                    <option>Full face wax</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="date" className="form-control" id="pickDate" autocomplete="off" required data-date-end-date="4d" />
                                <Label className="form-control-placeholder" htmlFor="pickDate"></Label>
                            </FormGroup>
                            <FormGroup>
                                <Label className="select-form-control-placeholder" htmlFor="time" />
                                <Input className="form-control" type="select" name="time" id="time" required>
                                    <option selected disable value>Pick a time...</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>3:00 PM</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className="forgot-pass-fau text-center">
                                <a href="#" className="text-secondary">
                                    By Clicking "Book Appointment" you accept our<br />
                                    <span className="text-primary-fau">Terms and Conditions</span>
                                </a>
                            </FormGroup>
                            <div className="btn-check-log">
                                <Button type="submit" className="btn-check-login">Book Appointment</Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
                <Button className="btn btn-lg btn-secondary text-nowrap d-block d-sm-none fixed-bottom" onClick={this.toggleModal} block>Book Appointment</Button>
            </React.Fragment>
        );
    }
}

export default Header;