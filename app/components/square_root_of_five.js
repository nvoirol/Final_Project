import React, { Component } from 'react';

//import Footer from './Footer';
import Header from './Header';

export default class square_root_of_five extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    })
  }
  render() {
    return (
        <div>
          <Header/>
          <div className="container">
           <span className="note"></span>
            <div className="row">
              <div className="col s12 m9 l10">
                
              </div>
            </div>
          </div>
        </div>
    )     
  }
};
