import { EventContents } from "./components/EventContents";
import { Footer } from "./components/Footer";
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
			<Footer />
		</>
	);
}

export default App;
