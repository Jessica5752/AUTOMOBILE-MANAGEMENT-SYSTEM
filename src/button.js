// Import React (Mandatory Step).
import React from "react";

	// Create a functional component
    
	const Button = (props) => {
		return <button onClick={props.callApi}>
		Generate a Joke
		</button>;
	}

// Export Button Component
export default Button;
