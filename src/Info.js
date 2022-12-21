// Importing the css for the info
import "./css/info.css";
import { ImCross } from "react-icons/im";
import { BiCircle } from "react-icons/bi";

const Info = () => {
	return (
		<div className="info">
			<div className="player">PLAYER <ImCross color="white"/></div>
			<div className="player">PLAYER <BiCircle color="white"/></div>
		</div>
	)
}

export default Info;
