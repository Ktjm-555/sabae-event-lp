import { Link } from "react-router-dom";

const dummyNews = [
	{ id: "1", title: "お知らせその1" },
	{ id: "2", title: "お知らせその2" },
];

export const NewsListPage = () => {
	return (
		<div>
			<h1>お知らせ一覧</h1>
			<ul>
				{dummyNews.map((news) => (
					<li key={news.id}>
						<Link to={`/news/${news.id}`}>{news.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
