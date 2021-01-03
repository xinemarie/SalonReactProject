import React from 'react';

const About = (props) => {
    return (
        <React.Fragment>
            {/* parallax */}
            <div className="parallaxShears">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col text-center text-white">
                            <h1><b>ABOUT THE STYLIST</b></h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* end parallax */}

            {/* about */}
            <div className="container">
                <div className="row row content align-items-center p-5">
                    <div className="col-md-6 align-self-center d-flex justify-content-center media item">
                        <img src="assets/images/aboutTami.jpg" className="img-fluid " height="500" width="400" />
                    </div>
                    <div className="col-md-6 align-self-center text-justify">
                        <h1>Tami</h1>
                        <p>I've been a licensed professional cosmetologist since 2011 after attending Charleston Cosmetology Institute.
                        I have great pride in becoming an independent hair stylist after building a wonderful clientele in the
                        Charleston area. I assisted the Scruples team at the 2016 Scruples Symposium in Cancun, Mexico, as well as
                        assisted in a commercially professional hair photoshoot, and I attend one of the largest annual hair shows our
                        industry offers every chance I get. It's been a dream to operate with flexibility, and I continue to grow in
                        the beauty industry with continuing education to give you the latest trends and techniques! The sky is truly
                        the limit! I am a huge family person! I have 3 boys of my own and an amazing husband that motivate me to
                        thrive! Amazing food, music, warm weather and the beach make me happy! I love to travel when I can (I have
                        family from Guam and have visited 8 times), and I like to attend local festivals and support small businesses.</p>
                    </div>
                </div>
            </div>
            {/* end about */}
        </React.Fragment>
    );
}

export default About;