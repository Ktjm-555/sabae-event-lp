import { EventContents } from "../EventContents";
import { Hero } from "../Hero";
import { IntroduceContents } from "../IntroduceContents";
import { IntroduceContentsWide } from "../IntroduceContentsWide";

const TopPage = () => (
	<>
		<Hero />
		<EventContents />
		<IntroduceContents />
		<IntroduceContentsWide />
	</>
);

export default TopPage;
