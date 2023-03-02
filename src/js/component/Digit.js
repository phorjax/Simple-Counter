import React from "react";


//create your first component
const Digit = (props) => {
	return (
		<div className="digitContainer">
            <h1>{props.orange % 10}</h1>
		</div>
	);
};

export default Digit;
