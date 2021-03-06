import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Jumbotron, Container } from 'reactstrap';
import SimpleMap from './MapComponentIceland';

export function Iceland(props) {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="main-title">Welcome to Iceland</h1>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="carousel-wrapper">
        <Carousel className="carousel">
          <div>
            <img src="assets/img/iceland/iceland-photo-7.jpg" />
          </div>
          <div>
            <img src="assets/img/iceland/iceland-photo-8.jpg" />
          </div>
          <div>
            <img src="assets/img/iceland/iceland-photo-3.jpg" />
          </div>
        </Carousel>
      </div>

      <h1 className="itinerary">Trip Itinerary</h1>

      <div className="container trip-description">
        <h5 className="activity-head">1. Vistit the Mývatn Nature Baths</h5>
        <p>
          These are quieter and less expensive than the famous Blue Lagoon
          outside Reykjavik. The geothermal spa offers the most relaxing natural
          bathing and is the most tempting attraction. The water from the
          underground hot springs reaches 37–39 °C and is beneficial for health
          and skin. Grab some local geyser bread that they sell at the little
          cafe and relax!{' '}
        </p>
        <h5 className="activity-head">2. Watch the Northern Lights</h5>
        <p>
          {' '}
          Seeing this wonderful natural phenomenon in person was one of the most
          awe-inspiring things I ever witnessed. The lights are best admired in
          the remote places away from city lights. The best time to catch them
          is from mid-September to mid-April. However, it’s a crapshoot! The
          longer you stay the north, the better your chances!
        </p>
        <h5 className="activity-head">3. Skaftafell Ice Cave </h5>
        <p>
          Aptly named the land of ice, this country is literally covered in ice
          and snow. The overwhelmingly beautiful ice caves in Vatnajökull
          National Park attract adventurers from around the globe.
        </p>
        <h5 className="activity-head">
          4. Day trip to the Jökulsárlón glacier lagoon
        </h5>
        <p>
          Located in the southeast of Iceland, this ice flow is one of the most
          popular attractions in the area country. I enjoyed just sitting down
          and listening to the ice crash into each other on its way out to sea.
          For an up-close look at the glaciers, consider exploring the lagoon by
          boat.
        </p>
        <h5 className="activity-head">5. Go to Landmannalaugar</h5>
        <p>
          The multicolored rhyolite mountains, lava fields, and the Hekla
          volcano make it a popular tourist destination. The striking landscapes
          look like a different planet. Hiking and horseback riding are among
          the most popular activities here.
        </p>
      </div>
      <Container>
        <div className="gMap">
          <SimpleMap />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Iceland;
