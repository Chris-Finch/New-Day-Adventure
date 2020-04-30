import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Jumbotron } from 'reactstrap';
import SimpleMap from './MapComponentPeru';

export function Peru(props) {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="main-title">Welcome to Peru</h1>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="carousel-wrapper">
        <Carousel className="carousel">
          <div>
            <img src="assets/img/peru/peru-photo-1.jpg" />
          </div>
          <div>
            <img src="assets/img/peru/peru-photo-2.jpg" />
          </div>
          <div>
            <img src="assets/img/peru/peru-photo-3.jpg" />
          </div>
        </Carousel>
      </div>

      <h1 className="itinerary">Trip Itinerary</h1>

      <div className="container trip-description">
        <h5 className="activity-head">1. Explore Machu Picchu</h5>
        <p>
          This legendary “lost city of the Incas” is one of the most-visited
          tourist attractions in all of South America. Aqueducts, granite and
          limestone temples and other forms of Inca architecture are all
          beautifully preserved at this essential tourist attraction.{' '}
        </p>
        <h5 className="activity-head">2. Check out Lima</h5>
        <p>
          ima is a chaotic and beautiful introduction to the country. Visit the
          Larco Museum to see its pre-Colombian artifacts, the Aliaga House for
          Peruvian art and artifacts, Plaza Mayor for colonial beauty. At night,
          and head to the Barranco district for the hottest parties.
        </p>
        <h5 className="activity-head">3. Fly over the Nasca Lines</h5>
        <p>
          The Nasca Lines are a series of ancient geoglyphs that dominate the
          San José desert and Nasca Valley. There are over 10,000 lines and 300
          different plant and animal figures depicted. No one really knows how
          they got there (maybe aliens?).{' '}
        </p>
        <h5 className="activity-head">4. Relax at Lake Titicaca</h5>
        <p>
          This lake covers over 3,000 square miles and sits at 12,500 feet above
          sea level and as such is considered the world’s largest high altitude
          lake. The towns surrounding the lake are tourist friendly and a mix of
          colonial architecture and bustling markets, while the islands dotted
          around the lake are largely off the radar for most travelers.
        </p>
        <h5 className="activity-head">5. Hike the Colca Canyon</h5>
        <p>
          Colca Canyon is the deepest canyon in the world and is thought to be
          twice as deep as the Grand Canyon at certain parts. This is a great
          place to spot Andean condors, and unlike the Grand Canyon, Colca is
          habitable. A trip here isn’t complete unless you visit one of the
          small agricultural villages for a taste of daily life.
        </p>
      </div>
      <div className="gMap">
        <SimpleMap />
      </div>
    </React.Fragment>
  );
}

export default Peru;
