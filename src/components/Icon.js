import React from "react";

const Icon = ({ src, name, onClick }) => {
	return (
		<div className="icon">
			<button className="button" onClick={onClick}>
				<img src={src} alt="" className="img" />
				<p className="text">{name}</p>
			</button>
		</div>
	);
};

export default Icon;
