import React from 'react';
import Icon from './icon';

function FullScreen(props){
	return (
		<Icon {...props}>
			<path d="M8 2h-3c-1.7 0-3 1.3-3 3v3c0 0.6 0.4 1 1 1s1-0.4 1-1v-3c0-0.6 0.4-1 1-1h3c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path>
			<path d="M8 20h-3c-0.6 0-1-0.4-1-1v-3c0-0.6-0.4-1-1-1s-1 0.4-1 1v3c0 1.7 1.3 3 3 3h3c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path>
			<path d="M21 15c-0.6 0-1 0.4-1 1v3c0 0.6-0.4 1-1 1h-3c-0.6 0-1 0.4-1 1s0.4 1 1 1h3c1.7 0 3-1.3 3-3v-3c0-0.6-0.4-1-1-1z"></path>
			<path d="M19 2h-3c-0.6 0-1 0.4-1 1s0.4 1 1 1h3c0.6 0 1 0.4 1 1v3c0 0.6 0.4 1 1 1s1-0.4 1-1v-3c0-1.7-1.3-3-3-3z"></path>
		</Icon>
	)
}

export default FullScreen;