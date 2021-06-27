import React from "react";
import RecentlyAdded from "./RecentlyAdded";
import Icon from "./Icon";
import { iconsArray, recentlyAddedArray } from "./data";
import person from "../assets/person.PNG";
import power from "../assets/power.PNG";

const StartMenu = ({ bottom, onClose, onOpenFileExplorer }) => {
	return (
		<card style={{ bottom: bottom }}>
			<div className="row" style={{ justifyContent: "space-between" }}>
				<strong className="text">Pinned</strong>
				<button onClick={onClose} className="text moreButton ">
					All apps {">"}
				</button>
			</div>

			<div className="iconsRow">
				{iconsArray.map((item, index) => (
					<Icon
						key={index}
						src={item.src}
						name={item.name}
						onClick={() => {
							onClose();
							item.name === "File Explorer" && onOpenFileExplorer();
						}}
					/>
				))}
			</div>
			<br />
			<br />
			<div className="row" style={{ justifyContent: "space-between" }}>
				<strong className="text">Recommended</strong>
				<button onClick={onClose} className="text moreButton ">
					More {">"}
				</button>
			</div>

			{recentlyAddedArray.map((item, index) => (
				<RecentlyAdded key={index} src={item.src} name={item.name} onClick={onClose} />
			))}

			<div className="bottom">
				<div className="bottomRow">
					<button onClick={onClose} className="bottomUser button">
						<img src={person} alt="" />
						<p className="text">Bhuvesh</p>
					</button>

					<button onClick={onClose} className="button">
						<img src={power} alt="" style={{ objectFit: "contain", width: "1.5rem" }} />
					</button>
				</div>
			</div>
		</card>
	);
};

export default StartMenu;
