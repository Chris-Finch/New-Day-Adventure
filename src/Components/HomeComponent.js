import React from 'react';
import Banner from './BannerComponent';
import Cards from './CardComponent';
import MainJumbo from './Jumbotron';

function Home(props) {
    return(
        <div>
            <MainJumbo />
            <Banner />
            <div className="container-fluid main-content">
                <h2 className="trip-header">We offer guided trips to some of the most amazing places in the World!</h2>
            </div>
            <Cards />
        </div>
    );
}

export default Home;