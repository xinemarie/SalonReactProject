import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>About</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Stylist</h3>
                    <p>info here</p>
                </div>
                <div className="col-sm-6">
                    photo here
                </div>
            </div>
        </div>
    );
}

export default About;