import React, { useEffect, useState } from "react";
import moment from "moment";
import { useInterval } from "../hooks/useInterval";
import StartMenu from "./StartMenu";
import video from "../assets/video.webm";
import { taskbarIcons } from "./data";
import taskbar_right_1 from "../assets/taskbar_right_1.PNG";
import taskbar_right_2 from "../assets/taskbar_right_2.PNG";
import window from "../assets/window.png";

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [open, setOpen] = useState(false);
	const [fileExplorer, setFileExplorer] = useState(false);

	useInterval(() => {
		setCounter((counter) => counter + 1);
	}, 60000);

	useEffect(() => {}, [counter]);

	const closeMenu = () => {
		setOpen((open) => !open);
	};

	return (
		<div className="container">
			<video autoPlay="autoplay" muted id="vid">
				<source src={video} type="video/mp4" />
			</video>

			{fileExplorer && (
				<div className="fileExplorer" onClick={() => setFileExplorer(false)}>
					<img src={window} alt="" />
				</div>
			)}

			<div className="center">
				<StartMenu
					bottom={open ? "4.2rem" : "-33rem"}
					onClose={closeMenu}
					onOpenFileExplorer={() => setFileExplorer(true)}
				/>
			</div>

			<div className="taskbar">
				{taskbarIcons.map((item, index) => (
					<button key={index} className="button" onClick={() => index === 0 && closeMenu()}>
						<img src={item} alt="" />
					</button>
				))}

				<div className="right">
					<button className="button">
						<img src={taskbar_right_1} alt="" />
					</button>

					<button className="button">
						<div className="dateTime">
							<p className="text">{moment().format("LT")}</p>
							<p className="text">{moment().format("dddd")}</p>
							<p className="text">{moment().format("DD-MM-YYYY")}</p>
						</div>
					</button>

					<button className="button">
						<img src={taskbar_right_2} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
