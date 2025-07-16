import { useParams } from "react-router-dom";

const NewsDetailPage = () => {
	const { newsId } = useParams();

	return (
		<div>
			<h1>お知らせ詳細</h1>
			<p>選択された記事ID: {newsId}</p>
		</div>
	);
};

export default NewsDetailPage;
