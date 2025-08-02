// NOTE: 並び順変えたら、secondGuestsImageも変更する必要ある
// 足すのはOK
export const guests1 = [
	{
		name: `くれいじーまぐねっと<br class="sp-only">[メインMC]`,
		imgSrc: `${import.meta.env.BASE_URL}images/photo_spstage_guest_01.png`,
		alt: "くれいじーまぐねっとの画像",
	},
	{
		name: "梶原叶渚",
		imgSrc: `${import.meta.env.BASE_URL}images/photo_spstage_guest_04.png`,
		alt: "梶原叶渚の画像",
	},
	{
		name: "MINAMI",
		imgSrc: `${import.meta.env.BASE_URL}images/photo_spstage_guest_05.png`,
		alt: "MINAMIの画像",
	},
	{
		name: "村谷はるな",
		imgSrc: `${import.meta.env.BASE_URL}images/photo_spstage_guest_06.png`,
		alt: "村谷はるなの画像",
	},
	{
		name: "りんか",
		imgSrc: `${import.meta.env.BASE_URL}images/photo_spstage_guest_07.png`,
		alt: "りんかの画像",
	},
	{
		name: "米澤りあ",
		imgSrc: `${import.meta.env.BASE_URL}images/photo_spstage_guest_08.png`,
		alt: "米澤りあの画像",
	},
];

export const secondGuestsImage = guests1.slice(1, 5);

export const guests2 = [
	{
		name: "EXILE TETSUYA",
		imgSrc: `${import.meta.env.BASE_URL}images/photo_spstage_guest_02.png`,
		alt: "EXILE TETSUYAの画像",
	},
	{
		name: `岩谷翔吾<br class="sp-only">（THE RAMPAGE）`,
		imgSrc: `${import.meta.env.BASE_URL}images/photo_spstage_guest_03.png`,
		alt: "岩谷翔吾（THE RAMPAGE）の画像",
	},
];
