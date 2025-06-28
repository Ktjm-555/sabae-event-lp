import { EventContents } from "./components/EventContents";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroduceContents } from "./components/IntroduceContents";
import { IntroduceContentsWide } from "./components/IntroduceContentsWide";

import ReactGA from "react-ga4";

// NOTE：initializeは初期化+sendしている。
// ルーティングを設定するときは二重送信に要注意！
if (import.meta.env.MODE === "production") {
	ReactGA.initialize("G-1P3N11YF8M");
}

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
