import { BrowserRouter, Route, Routes } from "react-router-dom";

import ReactGA from "react-ga4";
import { Layout } from "./components/pages/Layout";
import TopPage from "./components/pages/TopPage";
import { NewsListPage } from "./components/pages/news/NewsListPage";
import { ScrollToHash } from "./components/ScrollToHash";
import { NewsDetailPage } from "./components/pages/news/NewsDetailPage";

// NOTE：initializeは初期化+sendしている。
// ルーティングを設定するときは二重送信に要注意！
if (import.meta.env.MODE === "production") {
	ReactGA.initialize("G-1P3N11YF8M");
}

function App() {
	return (
		<>
			<BrowserRouter basename="/sabae-event-lp/">
				<ScrollToHash />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<TopPage />} />
						<Route path="news" element={<NewsListPage />} />
						<Route path="news/:newsId" element={<NewsDetailPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
