import React, { Component } from 'react';

import Header from './Header';

export default class turkish_mihrab extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
        <div>
          <Header/>
          <div className="container">
            <div className="row">
              <div className="col s12 m9 l10">
                <div className="turkishPic"> <img src="./images/mihrab_grid.jpg"/></div>
              </div>
            </div>
          </div>
        </div>
    )     
  }
};
