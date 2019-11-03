import React from 'react';
import classes from './ComponentA.css'

function ComponentA(){
	return (
		<div className={classes.border}>
			<button>ComponentA - Button</button>
		</div>
	);
}

export default ComponentA;