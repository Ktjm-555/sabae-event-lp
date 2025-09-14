import { secondGuestsImage, thirdGuestsImage } from "./guests";

// NOTE: 上から新しいの
// 詳細ページがないものはtype Xとしておく
export const newsList = [
	{
		id: 7,
		date: "2025/09/17",
		title: "キッズダンスショーの詳細を追加しました。",
		type: "X",
		url: "/#7",
	},
	{
		id: 6,
		date: "2025/09/07",
		title: "ステージエリアのタイムスケジュールが公開されました",
		type: "X",
		url: "/#6",
	},
	{
		id: 5,
		date: "2025/08/05",
		title: "スペシャルステージの出演ゲスト第3弾が公開されました",
		type: "B",
		url: "/news/5",
		detail: `
			<span class="text1">“さばえアクション∞(エイト)”コレクション</span>
			<span class="pc_only"> produced by TGC</span><br />
			<span class="sp_only">produced by TGC </span>出演ゲスト第３弾
		`,
		images: thirdGuestsImage,
	},
	{
		id: 4,
		date: "2025/08/05",
		title: "ブース一覧が公開されました",
		type: "X",
		url: "/booth",
	},
	{
		id: 3,
		date: "2025/08/05",
		title: "スペシャルステージ入場券申込概要が公開されました",
		type: "X",
		url: "/ticket",
	},
	{
		id: 2,
		date: "2025/07/25",
		title: "スペシャルステージの出演ゲスト第2弾が公開されました",
		type: "A",
		url: "/news/2",
		detail: `
			<span class="text1">“さばえアクション∞(エイト)”コレクション</span>
			<span class="pc_only"> produced by TGC</span><br />
			<span class="sp_only">produced by TGC </span>出演ゲスト第２弾
		`,
		images: secondGuestsImage,
	},
	{
		id: 1,
		date: "2025/06/25",
		title: "めがねのまちさばえSDGsフェス2025の特設サイトがオープンしました",
		type: "X",
	},
];
