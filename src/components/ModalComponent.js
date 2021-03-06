import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

const BookModal = (props) => {
    const {
        buttonLabel,
        classNameName
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal className="modal-body book-modal-body" isOpen={modal} toggle={toggle} classNameName={classNameName}>
                <h4 className="modal-title text-center">BOOK APPOINTMENT</h4>
                <Form className="book-modal-form">
                    <ModalBody>
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
                    </ModalBody>
                </Form>
            </Modal>
        </div>
    );
}

export default BookModal;