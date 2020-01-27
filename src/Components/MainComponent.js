import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from './HomeComponent';
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import Iceland from './Iceland';
import Italy from './Italy';
import Peru from './Peru';
import Thailand from './Thailand';


class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Header />
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/iceland' component={Iceland} />
              <Route path='/italy' component={Italy} />
              <Route path='/peru' component={Peru} />}
              <Route path='/thailand' component={Thailand} />
              <Redirect to='/home' />
            <Home />
            </Switch>
            <Footer />
            
        </div>
    );
  }
}

export default Main;
