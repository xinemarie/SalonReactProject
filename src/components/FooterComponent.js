import React from 'react';
import {
    Button,
    Form,
    Label, 
    Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <section id="site-footer">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-sm-6 col-md-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><Link to='/home'><i class="fa fa-angle-double-right" />Home</Link></li>
                            <li><Link to='/about'><i class="fa fa-angle-double-right" />About</Link></li>
                            <li><Link to='/services'><i class="fa fa-angle-double-right" />Services</Link></li>
                            <li><Link to='/contact'><i class="fa fa-angle-double-right" />Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h5>Contact</h5>
                        <ul class="list-unstyled quick-links">
                            <li><a href="tel:+15555555555" title="call me"><i class="fa fa-phone"></i>555-867-5309</a></li>
                            <li><a href="mailto:email@email.com" title="email me"><i class="fa fa-envelope"></i>stylist@stylist.com</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 pl-5">
                        <h5>Newsletter</h5>
                        <div class="newsletter js-rollover" data-radius="50">
                            <Form className="newsletter-form">
                                <Input type="email" class="form-control" id="emailAddress" placeholder="Enter your email" autocomplete="off" required />
                                <Label class="form-control-placeholder" htmlFor="emailAddress" />
                                <Button type="submit" class="button">Subscribe</Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul class="list-unstyled list-inline social text-center">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-youtube"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;