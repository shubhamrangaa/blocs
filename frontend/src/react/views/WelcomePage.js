import React from "react";
import StartButton from "../components/StartButton";

const WelcomePage = () => {
	return (
		<div id='container'>
			<div id='pixi-root'></div>
			<div>
				Welcome to Rocket
				<StartButton />
			</div>
		</div>
	);
};

export default WelcomePage;
