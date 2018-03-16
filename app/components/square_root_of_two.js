import React, { Component } from 'react';

//import Footer from './Footer';
import Header from './Header';

export default class square_root_of_two extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount(){
    $(document).ready(function(){
  })
}

 render() {
    return (
        <div>
          <Header/>
          <div className="container">
            <div className="row">
              <div className="col s12 m9 l10">
                <div className="r2Pic"> <img src="./images/root_2.jpg"/></div>
              </div>
            </div>
          </div>
        </div>
    )     
  }
};