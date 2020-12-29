import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function Services(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Services</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Services</h3>
                    <p>info here</p>
                </div>
                <div className="col-sm-6">
                    stuff here
                </div>
                <div className="col">
                    stuff here
                </div>
            </div>
        </div>
    );
}

export default Services;