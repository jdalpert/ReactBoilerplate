
import React from 'react';
import { Route, Link, IndexRoute } from 'react-router';
import App from './components/app.react';

import DisplayChild from './components/displayChild.react';
import Child from './components/child.react';
import UpdateChild from './components/updateChild.react';


export default (

	<Route path="/" component={App}>
		<IndexRoute component={Child}/>
		<Route path="/update/:id" component={UpdateChild} />
	</Route>
);
