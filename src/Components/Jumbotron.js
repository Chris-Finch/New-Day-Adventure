import React from 'react';
import { Jumbotron } from 'reactstrap';

function MainJumbo(props) {
    return(
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="main-title">New Day Adventure Travel</h1>
                <h2>See the World with Us</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
    );
};

export default MainJumbo;