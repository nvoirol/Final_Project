import React, { Component } from 'react';

import Header from './Header';

export default class ethiopian_text extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount(){
    $(document).ready(function(){
    });
  }
  render() {
    return (
        <div>
          <Header/>
            <div className="container">
              <div className="row">
                <div className="col m10">
                  <video className="ethiopianVid" width="auto" height="500px" controls>
                    <source src="./vids/ethiopian_r2.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
        </div>
    )     
  }
};
