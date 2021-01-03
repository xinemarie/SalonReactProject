import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const Contact = (props) => {
    return (
        <React.Fragment>
            {/* parallax */}
            <div className="parallaxBlowdry">
                <div className="container h-100">
                    <div className="row h-100 align-items-end">
                        <div className="col text-right text-dark">
                            <h1><b>CONTACT LAVENDER SALON</b></h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* end parallax */}

            {/* contact form */}
            <div className="container">
                <div className="row row-content">
                    <div className="col-7 offset-2">
                        <Form className="book-modal-form">
                            <FormGroup className="form-group row">
                                <Input type="name" className="form-control" id="fullName" autocomplete="off" required />
                                <Label className="form-control-placeholder" htmlFor="fullName">Full Name</Label>
                            </FormGroup>
                            <FormGroup className="form-group row">
                                <Input type="email" className="form-control" id="contactEmail" autocomoplete="off" required />
                                <Label className="form-control-placeholder" htmlFor="contactEmail">Email</Label>
                            </FormGroup>
                            <FormGroup className="form-group row">
                                <Input type="tel" className="form-control" id="contactNum" autocomplete="off" required />
                                <Label className="form-control-placeholder" htmlFor="contactNum">Phone Number</Label>
                            </FormGroup>
                            <FormGroup className="form-group row">
                                <Input type="textarea" className="form-control" name="message" id="message" rows="5" placeholder="Your message..." />
                                <Label className="form-control-placeholder" htmlFor="message"></Label>
                            </FormGroup>
                            <FormGroup className="form-group row">
                                <Button type="submit" className="contactBtn">Submit your message</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
            {/* end form */}
        </React.Fragment>
    );
}

export default Contact;