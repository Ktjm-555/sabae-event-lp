import styled from "@emotion/styled";
import { COLORS } from "../../consts/color";
import { Button } from "../ui/Button";

export const AccessCardContents = () => {
	const goToAccessPage = () => {
		window.open(
			"https://www.city.sabae.fukui.jp/kurashi_tetsuduki/kokyokotsu/chushajo_churinjo/Keikaku00000.html",
			"_blank"
		);
	};

	return (
		<>
			<DIV_Container>
				<H2>
					西山公園（
					<A_URL
						href="https://maps.app.goo.gl/md8P1A5uEKCWPTTx9"
						target="_blank"
					>
						<IMG_icon
							src={`${import.meta.env.BASE_URL}icon/map.svg`}
							alt="西山公園のmapのアイコン"
						/>
						福井県鯖江市桜町3丁目8-10
					</A_URL>
					）
				</H2>
				<ul>
					<li>
						<IMG_icon
							src={`${import.meta.env.BASE_URL}icon/access_hapiline.svg`}
							alt="ハピラインのアイコン"
							className="access-icon"
						/>
						ハピライン鯖江駅から 徒歩15分
					</li>
					<li>
						<IMG_icon
							src={`${import.meta.env.BASE_URL}icon/access_railway.svg`}
							alt="鉄道のアイコン"
							className="access-icon"
						/>
						福井鉄道 西山公園駅から 徒歩1分
					</li>
					<li>
						<IMG_icon
							src={`${import.meta.env.BASE_URL}icon/access_bus.svg`}
							alt="バスのアイコン"
							className="access-icon"
						/>
						つつじバス 西山公園バス停から 徒歩1分
					</li>
					<li>
						<IMG_icon
							src={`${import.meta.env.BASE_URL}icon/access_car.svg`}
							alt="車のアイコン"
							className="access-icon"
						/>
						北陸自動車道 鯖江ICから 車で5分
					</li>
				</ul>
			</DIV_Container>
			<DIV_Container className="border-none">
				<H2>
					<SPAN_Container>無料</SPAN_Container>
					臨時駐車場
				</H2>
				<ul>
					<li>
						●鯖江市役所（
						<A_URL
							href="https://maps.app.goo.gl/StivTBgmU626TxG76"
							target="_blank"
						>
							<IMG_icon
								src={`${import.meta.env.BASE_URL}icon/map.svg`}
								alt="鯖江市役所のmapのアイコン"
							/>
							鯖江市西山町13-1
						</A_URL>
						）
					</li>
				</ul>
			</DIV_Container>
			<DIV_Container className="border-none">
				<H2>
					<SPAN_Container className="red">有料</SPAN_Container>
					近隣駐車場
				</H2>
				<p>2時間以内無料／以降300円</p>
				<ul>
					<li>
						●嚮陽会館前駐車場（
						<A_URL
							href="https://maps.app.goo.gl/eaSK9uQZLfyAqyHWA"
							target="_blank"
						>
							<IMG_icon
								src={`${import.meta.env.BASE_URL}icon/map.svg`}
								alt="嚮陽（きょうよう）会館前駐車場のmapのアイコン"
							/>
							福井県鯖江市桜町2丁目7-48-1
						</A_URL>
						）
					</li>
					<li>
						●ふれあい広場駐車場（
						<A_URL
							href="https://maps.app.goo.gl/pH5KGmpAJysKaTKVA"
							target="_blank"
						>
							<IMG_icon
								src={`${import.meta.env.BASE_URL}icon/map.svg`}
								alt="ふれあい広場駐車場のmapのアイコン"
							/>
							福井県鯖江市桜町3丁目4-34-1
						</A_URL>
						）
					</li>
				</ul>
			</DIV_Container>
			<DIV_Container className="border-none">
				<Button onClick={goToAccessPage}>満車・空車状況</Button>
			</DIV_Container>
			<DIV_Container className="border-none last">
				<P_Annotation>
					※駐車台数に限りがありますので、公共交通機関でのご来場にご協力ください。
					<br />
					※さばえ3大フェス会場をつなぐシャトルバスが運行予定です。
				</P_Annotation>
			</DIV_Container>
		</>
	);
};

const H2 = styled.h2`
	font-size: 16px;
	margin-bottom: 8px;
`;

const A_URL = styled.a`
	font-size: 14px;
	font-weight: 400;
	text-decoration: underline;
	text-underline-offset: 3px;

	&:hover {
		// TODO：なぜかhoverするとラインが消えるので。
		text-decoration: underline;
		opacity: 0.5;
	}
`;

const IMG_icon = styled.img`
	vertical-align: sub;
	margin-right: 3px;

	&.access-icon {
		vertical-align: text-bottom;
		margin-right: 10px;
	}
`;

const DIV_Container = styled.div`
	padding-bottom: 10px;
	border-bottom: 1px solid ${COLORS.BORDER};
	margin-bottom: 10px;

	&.border-none {
		border: none;
	}

	&.last {
		padding-bottom: 0px;
		margin-bottom: 0px;
	}
`;

const SPAN_Container = styled.span`
	font-size: 14px;
	background-color: #004080;
	color: white;
	padding: 5px 10px;
	margin-right: 10px;
	font-weight: 400;

	&.red {
		background-color: ${COLORS.PRIMARY};
	}
`;

const P_Annotation = styled.p`
	font-size: 12px;
`;
