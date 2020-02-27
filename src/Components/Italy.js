import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Jumbotron } from 'reactstrap';

export function Italy(props) {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="main-title">Welcome to Italy</h1>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="carousel-wrapper">
        <Carousel className="carousel">
          <div>
            <img src="assets/img/italy/italy-photo-6.jpg" />
          </div>
          <div>
            <img src="assets/img/italy/italy-photo-1.jpg" />
          </div>
          <div>
            <img src="assets/img/italy/italy-photo-3.jpeg" />
          </div>
        </Carousel>
      </div>

      <h1 className="itinerary">Trip Itinerary</h1>

      <div className="container trip-description">
        <h5 className="activity-head">1. Explore Venice </h5>
        <p>
          Besides Carnival, Venice is just a great place to visit. While not the
          cheapest destination in Italy, Venice is great to see canals,
          experience a gondola ride, and have an amazing romantic candlelight
          dinner. Head to the old Jewish Ghetto for hip bars and cheap drinks.
        </p>
        <h5 className="activity-head">2. Discover Rome</h5>
        <p>
          Rome has so much to see and do you’ll need to make several trips to
          even scratch the surface. Besides the obvious highlights, make sure
          you explore the Trastevere student neighborhood west of the river.
          It’s my favorite place in Rome, and it offers cheap food, funky little
          bars, and tiny winding streets few tourists venture to.
        </p>
        <h5 className="activity-head">3. Wander through Pompeii</h5>
        <p>
          Pompeii is the ancient city that was destroyed by a volcano but
          preserved by a blanket of ash. Walk around the city as it stood the
          day the volcano exploded, moving in and out of homes and businesses
          where pots and vases still lay. Most of the beautiful frescoes are
          still there with their beautiful colors. It’s a full-day activity.
        </p>
        <h5 className="activity-head">4. Hike the Cinque Terre</h5>
        <p>
          The Cinque Terre consists of five dramatically located villages on the
          west coast of Italy, backed by steep vineyards and mountains. It’s
          heaven here. There are great hikes that range in difficulty,
          incredible fresh pesto and seafood, and great local wine. Each city
          has its own unique personality so visit all five.
        </p>
        <h5 className="activity-head">5. Explore the Amalfi Coast</h5>
        <p>
          The southern cousin to the Cinque Terre, the Amalfi coast is much less
          visited but equally as beautiful (some say more). You’ll find great
          hillside towns, beautiful beaches, and azure blue water in which to
          cool off.
        </p>
      </div>
    </React.Fragment>
  );
}

export default Italy;
