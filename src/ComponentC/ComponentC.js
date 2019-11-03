import React from 'react';
import classes from './ComponentC.css'

function componentC(){
	return (
		<div className={classes.border}>
			<button>ComponentB - Button</button>
		</div>
	);
}

export default componentC;