import { EventContents } from "../EventContents";
import { SpStageContents } from "../SpStageContents";
import { Hero } from "../Hero";
import { IntroduceContents } from "../IntroduceContents";
import { IntroduceContentsWide } from "../IntroduceContentsWide";

const TopPage = () => (
	<>
		<Hero />
		<EventContents />
		<SpStageContents />
		<IntroduceContents />
		<IntroduceContentsWide />
	</>
);

export default TopPage;
