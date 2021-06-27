import React from "react";

const RecentlyAdded = ({ src, name, onClick }) => {
	return (
		<button className="recommended button" onClick={onClick}>
			<img src={src} alt="" className="img" />
			<div className="recommendedDesc">
				<p className="text">{name}</p>
				<p className="text" style={{ color: "#B0B0B0" }}>
					Recently Added
				</p>
			</div>
		</button>
	);
};

export default RecentlyAdded;
