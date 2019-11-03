import React from 'react';
import classes from './ComponentB.css'

function componentB(){
	return (
		<div className={classes.border}>
			<button>ComponentB - Button</button>
		</div>
	);
}

export default componentB;