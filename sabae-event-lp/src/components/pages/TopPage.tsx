import { Link } from "react-router-dom";
import { EventContents } from "../EventContents";
import { Hero } from "../Hero";
import { IntroduceContents } from "../IntroduceContents";
import { IntroduceContentsWide } from "../IntroduceContentsWide";

const TopPage = () => (
	<>
		<Hero />
		<EventContents />
		<Link to="/news">お知らせ</Link>

		<IntroduceContents />
		<IntroduceContentsWide />
	</>
);

export default TopPage;
