import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

const Cards = props => {
  return (
    <div className="container main-content">
      <div className="row no-gutters">
        <div className="col-md-5">
          <Card className="main-cards mb-5">
            <Link to='/iceland'>
              <CardImg
                top
                width="100%"
                src="/assets/img/iceland/iceland-photo-1.jpg"
                alt="Card image cap"
              />
            </Link>
            <CardBody className="card-body">
              <CardTitle className="card-title">Iceland</CardTitle>
              <CardText className="card-text">
                Isolated in the frigid North Atlantic and
                forged through centuries of volcanic upheaval and tectonic
                shifting, Iceland is staggering to look at and otherworldly to
                explore. The outdoors provide all the action you need: towering
                mountain peaks scratch the sky, massive glaciers scrape the
                earth, sprawling icefields stretch beyond the horizon, and
                gorgeous fjords dazzle the eye.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5">
          <Card className="main-cards mb-5">
            <Link to="/italy">
              <CardImg
                top
                width="100%"
                src="/assets/img/italy/italy-photo-1.jpg"
                alt="Card image cap"
              />
            </Link>
            <CardBody className="card-body">
              <CardTitle className="card-title">Italy</CardTitle>
              <CardText className="card-text">
                Italy’s great food, beautiful countryside, fabulous wine, and
                long history make it an excellent country to visit. The
                vineyards in Tuscany, the history of Florence, the ancient
                streets in Rome, the laid back nature of Southern Italy, the
                gorgeous Cinque Terre, and the romantic canals in Venice, all
                make the country irresistible. Relax, take in the scenery, and
                enjoy a latte.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-md-5">
          <Card className="main-cards mb-5">
            <Link to="/peru">
              <CardImg
                top
                width="100%"
                src="/assets/img/peru/peru-photo-1.jpg"
                alt="Card image cap"
              />
            </Link>
            <CardBody className="card-body">
              <CardTitle className="card-title">Peru</CardTitle>
              <CardText className="card-text">
                Peru is one of the most popular countries to travel around in
                South America. Travelers spend months backpacking Peru. People
                flock here to hike the Inca Trail and see Machu Picchu. Come
                explore the jungles, see the Amazon, head to Lake Titicaca, or
                to the beaches in the north. Learn about the local indigenous
                culture, try the coca tea, and practice your Spanish.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5">
          <Card className="main-cards mb-5">
            <Link to='/thailand'>
              <CardImg
                top
                width="100%"
                src="/assets/img/thailand/thailand-photo-1.jpg"
                alt="Card image cap"
              />
            </Link>
            <CardBody className="card-body">
              <CardTitle className="card-title">Thailand</CardTitle>
              <CardText className="card-text">
                Thailand is the travel hub of Southeast Asia. It’s the most
                visited country in the region – and with good reason! Thailand
                speaks for itself. When you hear its name, you already think
                about beaches, beauty, jungles, and food. And your thoughts are
                spot on. With its lush jungles, famed beaches, world-class
                diving, amazing food, friendly and cheap prices, Thailand is by
                far my favorite country in the world!
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
