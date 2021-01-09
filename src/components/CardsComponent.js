import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';
import { CARDS } from '../shared/cards';

class SalonCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: CARDS
        }
    }

    render() {
        const salonCard = this.state.cards.map(card => {
            return (
                <div className="col-sm-4 d-flex align-items-stretch">
                    <Card outline color="dark">
                        <CardImg top width="100%" src={card.image} alt={card.name} />
                        <CardBody>
                            <CardTitle tag="h5">{card.name}</CardTitle>
                            <CardText>{card.description}</CardText>
                            <Button color="dark" href='/services'>Services</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {salonCard}
                </div>
            </div>
        );
    }
}

export default SalonCards;