import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

function Contact(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-7 offset-2">
                    <Form className="book-modal-form">
                        <FormGroup className="form-group row">
                            <Input type="name" className="form-control" id="fullName" autocomplete="off" required />
                            <Label className="form-control-placeholder" for="fullName">Full Name</Label>
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Input type="email" className="form-control" id="contactEmail" autocomoplete="off" required />
                            <Label className="form-control-placeholder" for="contactEmail">Email</Label>
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Input type="tel" className="form-control" id="contactNum" autocomplete="off" required />
                            <Label className="form-control-placeholder" for="contactNum">Phone Number</Label>
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Input type="textarea" className="form-control" name="message" id="message" rows="5" placeholder="Your message..." />
                            <Label className="form-control-placeholder" for="message"></Label>
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Button type="submit" className="contactBtn">Submit your message</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;