import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import ReactGA from "react-ga4";
import { Layout } from "./components/pages/Layout";
import TopPage from "./components/pages/TopPage";
import { NewsListPage } from "./components/pages/news/NewsListPage";
import { ScrollToHash } from "./components/ScrollToHash";
import { NewsDetailPage } from "./components/pages/news/NewsDetailPage";
import { useEffect } from "react";

// NOTE：initializeは初期化+sendしている。
// ルーティングを設定するときは二重送信に要注意！
if (import.meta.env.MODE === "production") {
	ReactGA.initialize("G-1P3N11YF8M", {
		gaOptions: {
			send_page_view: false,
		},
	});
}

const usePageTracking = () => {
	const location = useLocation();

	useEffect(() => {
		if (import.meta.env.MODE !== "production") return;
		ReactGA.send({
			hitType: "pageview",
			page: location.pathname + location.search,
		});
	}, [location]);
};

function App() {
	return (
		<>
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<ScrollToHash />
				<InnerApp />
			</BrowserRouter>
		</>
	);
}

function InnerApp() {
	usePageTracking();

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<TopPage />} />
				<Route path="news" element={<NewsListPage />} />
				<Route path="news/:newsId" element={<NewsDetailPage />} />
			</Route>
		</Routes>
	);
}

export default App;
