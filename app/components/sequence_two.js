import React, { Component } from 'react';

import Header from './Header';

export default class sequence_two extends Component {
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
                  <video width="1050" height="auto" controls>
                    <source src="./vids/sequence_2.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
        </div>
    )     
  }
};

