
import React from 'react';
import { Route, Link, IndexRoute } from 'react-router';
import App from './components/app.react';

import DisplayChild from './components/displayChild.react';
import Child from './components/child.react';
import UpdateChild from './components/updateChild.react';


export default (
	
	<Route path="/" component={App}>
		<Route path="/child" component={Child} />
		<Route path="/displayChild" component={DisplayChild} />
		<Route path="/update" component={UpdateChild} />
	</Route>
);


