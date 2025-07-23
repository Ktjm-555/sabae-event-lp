import { EventContents } from "../EventContents";
import { SpStageContents } from "../SpStageContents";
import { Hero } from "../Hero";
import { IntroduceContents } from "../IntroduceContents";
import { AccessContents } from "../AccessContents";

const TopPage = () => (
	<>
		<Hero />
		<EventContents />
		<SpStageContents />
		<AccessContents />
		<IntroduceContents />
	</>
);

export default TopPage;
