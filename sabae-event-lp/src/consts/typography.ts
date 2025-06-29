/*
 * タグ関係なく自由につけたい時に使用するものを格納する。
 * Styledコンポーネント化したい場合はStyled.tsへ
 */

export const TEXT_L = () => `
	font-family: "M PLUS 1", sans-serif;
	font-weight: 500;
	font-size: 24px;

	@media (max-width: 900px) {
		font-size: 20px;
	}

	@media (max-width: 500px) {
		font-size: 16px;
	}
`;
