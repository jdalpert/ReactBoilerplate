
import React from 'react';
import { Route } from 'react-router';
import App from './components/app.react';

import DisplayChild from './components/displayChild.react';
import Child from './components/child.react';

export default (
	
	<Route path="/" component={App}>
		<Route path="/child" component={Child} />
		<Route path="/displayChild" component={DisplayChild} />
	</Route>
);


