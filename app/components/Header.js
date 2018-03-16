import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  componentDidMount(){
  $(document).ready(function(){
     $('.collapsible').collapsible();
    })
  }

  render() {
    return (
      <div>
        <header>
          <div className= "topContainer">
            <div className= "top">
              <div className= "titleRow">
                <div className="col_s7_push-s5"><span className="topText">exploring art and geometry</span></div>
                <div className="col_s5_pull-s7"><span><h1>demiougos</h1></span></div>
              </div>
            </div>
          </div>
                 <div className="navContainer">
                  <div className= "top-nav">
                    <div className= "nav-wrapper">
                      <div className="top-lower">
                        <div className= "top-row">
                          <div className="col_2_s2_push-s6">
                            <span className="nav_Text">
                              <Link to="Home">home</Link>
                            </span>
                          </div>
                          <div className="col_2_s2_push-s7">
                            <span className="nav_Text">
                              <Link to="about">about</Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>   
              <div className= "side-nav_fixed">
                 <div className="sideContainer">
                    <ul className="collapsible" data-collapsible="accordion">
                    <br></br>
                      <li>
                        <div className="collapsible-header"><span className="headerText">extenstion of the square</span></div>
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="sequence-one">sequence one</Link>
                            </span>
                          </div>
                            <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="sequence_two">sequence two</Link>
                            </span>
                          </div>
                      </li>
                      <li>
                        <div className="collapsible-header"><span className="headerText">building the grids</span></div>
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="square_root_of_2">square root of 2</Link>
                            </span>
                          </div>
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="one_point_five_rectangle">1.5 rectangle</Link>
                            </span>
                          </div>
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="square_root_of_3">square root of 3</Link>
                            </span>
                          </div>
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="square_root_of_4">square root of 4</Link>
                            </span>
                          </div>
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="square_root_of-5">square root of 5</Link>
                            </span>
                          </div>
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="phi_rectangle">phi rectangle</Link>
                            </span>
                          </div> 
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="square_root_of_phi">square root of phi</Link>
                            </span>
                          </div> 
                      </li>
                      <li>
                        <div className="collapsible-header"><span className="headerText">application examples</span></div>
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="ethiopian_text">ethiopian text</Link>
                            </span>
                          </div> 
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="cambiaso_drawing">cambiaso drawing</Link>
                             </span>
                          </div> 
                          <div className="collapsible-body">
                            <span className="bodyText">
                              <Link to="turkish_mihrab">turkish mihrab</Link>
                            </span>
                          </div> 
                      </li>
                    </ul>  
                     <div className="footer">
                      <div className="container">
                        <div className="footerText">home</div>
                      </div>
                    </div>       
                  </div>
                </div>          
        </header>
      </div>
    )
  }
}