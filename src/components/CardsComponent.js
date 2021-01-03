import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';

const SalonCards = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 d-flex align-items-stretch">
                    <Card>
                        <CardImg top width="100%" src="/assets/images/card1.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Cut</CardTitle>
                            <CardText>Haircuts for men, women, and children, and beard trim.</CardText>
                            <Button href='/services'>Services</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-4 d-flex align-items-stretch">
                    <Card>
                        <CardImg top width="100%" src="/assets/images/card2.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Color</CardTitle>
                            <CardText>Base color, foil highlights, balayage, gloss, and ombre.</CardText>
                            <Button href='/services'>Services</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-4 d-flex align-items-stretch">
                    <Card>
                        <CardImg top width="100%" src="/assets/images/card3.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Style and more!</CardTitle>
                            <CardText>Simple blowout, treatments, Brazilian blowout, extensions, and waxing.</CardText>
                            <Button href='/services'>Services</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SalonCards;