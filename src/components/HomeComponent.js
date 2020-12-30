import React from 'react';
import SalonCarousel from './CarouselComponent';
import SalonCards from './CardsComponent';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <SalonCarousel />
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-sm-8 text-center text-wrap">
                    <h3>Welcome, Lavender Tribe!</h3>
                    <p>Lavender Salon studio has been established since 2016 and is
                    privately nestled inside the Oaks Salon Studios where your elite stylist,
                    Tami, will pamper you from start to finish!</p>
                </div>
                <div class="col-sm-4 text-center">
                    <h4><img src="assets/images/tami.jpg" height="300" width="200" class="img-fluid rounded-circle" alt="Tami" /></h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SalonCards />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-5 business-hours">
                    <h2 className="text-center">Opening Hours</h2>
                    <ul className="list-unstyled opening-hours">
                        <li>Sunday <span className="pull-right">Closed</span></li>
                        <li>Monday <span className="pull-right">Closed</span></li>
                        <li>Tuesday <span className="pull-right">10:00 AM - 2:00 PM</span></li>
                        <li>Wednesday <span className="pull-right">10:00 AM - 4:00 PM</span></li>
                        <li>Thursday <span className="pull-right">10:00 AM - 4:00 PM</span></li>
                        <li>Friday <span className="pull-right">10:00 AM - 4:00 PM</span></li>
                        <li>Saturday <span className="pull-right">9:00 AM - 2:00 PM</span></li>
                    </ul>
                </div>
                <div className="col-md-7 text-center">
                    iframe here??
            </div>
            </div>


        </div>
    );
}

export default Home;