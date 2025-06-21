import { EventContents } from "./components/EventContents";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroduceContents } from "./components/IntroduceContents";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<EventContents />
			<IntroduceContents />
		</>
	);
}

export default App;
