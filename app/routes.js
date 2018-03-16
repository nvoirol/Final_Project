import React from "react";

import { Route, Router, browserHistory } from "react-router";

import Application from "./components/Application"

import Home from "./components/Home";
import sequence_one from "./components/sequence_one";
import sequence_two from "./components/sequence_two";
import square_root_of_two from "./components/square_root_of_two";
import one_point_five_rectangle from "./components/one_point_five_rectangle";
import square_root_of_three from "./components/square_root_of_three";
import square_root_of_four from "./components/square_root_of_four";
import square_root_of_five from "./components/square_root_of_five";
import phi_rectangle from "./components/phi_rectangle";
import square_root_of_phi from "./components/square_root_of_phi";
import ethiopian_text from "./components/ethiopian_text";
import cambiaso_drawing from "./components/cambiaso_drawing";
import turkish_mihrab from "./components/turkish_mihrab";
import about from "./components/about";

export default (
	<Router history={browserHistory}>
	  	<Route component={Application}>
	    	<Route path="/" component={Home} />
	    	<Route path="/sequence-one" component={sequence_one} />
	    	<Route path="/sequence_two" component={sequence_two} />
	    	<Route path="/square_root_of_two" component={square_root_of_two} />
	    	<Route path="/one_point_five_rectangle" component={one_point_five_rectangle} />
	    	<Route path="/square_root_of_three" component={square_root_of_three} />
	    	<Route path="/square_root_of_four" component={square_root_of_four} />
	    	<Route path="/square_root_of_five" component={square_root_of_five} />
	    	<Route path="/phi_rectangle" component={phi_rectangle} />
	    	<Route path="/square_root_of_phi" component={square_root_of_phi} />
	    	<Route path="/ethiopian_text" component={ethiopian_text} />
	    	<Route path="/cambiaso_drawing" component={cambiaso_drawing} />
	    	<Route path="/turkish_mihrab" component={turkish_mihrab} />
			<Route path="/about" component={about} />
	    </Route>
	</Router>
);