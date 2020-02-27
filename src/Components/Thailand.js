import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Jumbotron } from 'reactstrap';

export function Thailand(props) {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="main-title">Welcome to Thailand</h1>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="carousel-wrapper">
        <Carousel className="carousel">
          <div>
            <img src="assets/img/thailand/thailand-photo-1.jpg" />
          </div>
          <div>
            <img src="assets/img/thailand/thailand-photo-6.jpg" />
          </div>
          <div>
            <img src="assets/img/thailand/thailand-photo-3.jpg" />
          </div>
        </Carousel>
      </div>

      <h1 className="itinerary">Trip Itinerary</h1>

      <div className="container trip-description">
        <h5 className="activity-head">1. Vist Bangkok</h5>
        <p>
          This crazy city is a must-see. Explore temples, palaces, amazing
          markets, shops, one of the craziest nightlife scenes in the world, and
          of course, amazing Thai food. At first, I didn’t like this place but
          now it’s one of the places I feel most at home in. I love this city
          and return frequently.
        </p>
        <h5 className="activity-head">2. Adventure around Chiang Mai</h5>
        <p>
          Chiang Mai is an old city filled with temples, food markets, regular
          markets, amazing food, and a chill atmosphere. It’s a good launching
          pad for jungle treks into the area and there is a nearby elephant
          sanctuary.
        </p>
        <h5 className="activity-head">3. Hike in Khao Yai National Park</h5>
        <p>
          Khao Yai National Park, located about 2.5 hours north of Bangkok, is
          one of Thailand’s best national parks. It’s truly amazing — visually
          stunning, empty of tourists, filled with lush flora and fauna, and
          even a few wild elephants. Stay at the Greenleaf Guesthouse for a
          local experience.
        </p>
        <h5 className="activity-head">4. Vist Ko Lanta</h5>
        <p>
          While Ko Lanta has become more developed in recent years, it’s still a
          relevately paradise compared to its developed neighbors. Wide, white
          sand beaches, cheap food, and gorgeous sunsets, great caves,
          snorkeling, diving, – this is one of my favorite spots in the country.
        </p>
        <h5 className="activity-head">5. Partake in the Full Moon Party!</h5>
        <p>
          If you like partying, there’s no better party in the world than the
          famous Full Moon Party. The Full Moon Party is a giant festival-like
          party with a lot of drinking, dancing, and drugs. Each bar has its own
          sound system, so you’ll hear different music loudly blasting onto the
          beach every few feet. The beach itself is lined with people selling
          alcohol, fire dancers putting on shows, and little booths selling
          glow-in-the-dark face paint. Sure, it is super touristy but that
          doesn’t mean it’s not a lot of fun and it’s as much a part of Thailand
          as anything else.
        </p>
      </div>
    </React.Fragment>
  );
}

export default Thailand;
