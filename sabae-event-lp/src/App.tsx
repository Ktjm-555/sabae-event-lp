import { EventContents } from "./components/EventContents";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroduceContents } from "./components/IntroduceContents";
import { IntroduceContentsWide } from "./components/IntroduceContentsWide";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<EventContents />
			<IntroduceContents />
			<IntroduceContentsWide />
		</>
	);
}

export default App;
