import styled from "@emotion/styled";
import {
	S_DIV_CardContainer,
	S_DIV_SectionWrapper,
	S_P_Subtitle,
	S_SECTION_container,
	S_SPAN_Notice,
} from "../../../Style";
import { COLORS } from "../../../consts/color";
import { ContentsTitleOnly } from "../../contents/CotentsTitleOnly";
import { TableRow } from "../../ui/TableRow";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router-dom";

export const TicketPage = () => {
	const navigate = useNavigate();

	const goToTicketFormPage = (type: string) => {
		if (type === "enji") {
			window.open("https://form.run/@RyXin2yw4Q3Sg2BxU4MD", "_blank");
		} else if (type === "oyako") {
			window.open("https://form.run/@RIvzh2KbWZ4WGmBBWfX5", "_blank");
		} else {
			window.open("https://form.run/@VPW1CE1vwQG7HTK94ZNR", "_blank");
		}
	};

	const goToTop = () => {
		navigate("/");
	};
	return (
		<>
			<DIV_SectionWrapper className="top-section">
				<S_SECTION_container>
					<S_P_Subtitle id="3">めがねのまちさばえ応援プロジェクト</S_P_Subtitle>
					<ContentsTitleOnly
						title={"スペシャルステージ入場券<wbr>申込概要"}
						balloonList={["9/20", "土"]}
					/>

					<DIV_CardContainer>
						<dl>
							<TableRow title="開催日" top>
								令和７年９月２０日（土）
							</TableRow>

							<TableRow title="開場時間">１２時００分</TableRow>

							<TableRow title="開始時間">
								１３時３０分（１３時００分 オープニングアクト）
							</TableRow>

							<TableRow title="会場">
								西山公園 円形芝生広場（鯖江市桜町3丁目）
							</TableRow>

							<TableRow title="雨天時の対応">
								<UL_TableList>
									<li>
										①雨天時、鯖江市総合体育館に会場が変更となります。また、会場変更の判断は、９月１８日（木）１７時００分までに、特設サイトなどでご案内いたしますので、必ずご確認ください。
									</li>
									<li>
										②鯖江市総合体育館周辺には駐車場のご用意はありません。お車でお越しの方は、鯖江市役所など一般開放されている公共駐車場をご利用の上、シャトルバスでのご来場にご協力ください。
										<S_SPAN_Notice>
											※近隣店舗などへの無断駐車はおやめください。
										</S_SPAN_Notice>
									</li>
								</UL_TableList>
							</TableRow>

							<TableRow title="エリア区分">
								<div>
									<p>
										会場内は、ステージ前方から①鯖江市内園児エリア、②親子エリア、③一般エリアに分かれます。
									</p>
									{/* spaced-topはリストの上に文章がある時にマージンをつけるため */}
									<UL_TableList className="spaced-top bold">
										<li>
											①鯖江市内園児エリア（EXILE
											TETSUYAさんたちと一緒に「MORNING SUN」を踊ろう！）
											<P_Target>
												対象：鯖江市内の保育園･こども園に通う0～5歳児とそのご家族
											</P_Target>
											<UL_Notice>
												<li>※対象園児1人と保護者1人でお申込みください。</li>
												<li>
													※同行者として、同一世帯のご家族が入場できます。
													<br />
													<span className="indent">
														例）対象のお子様1人＋保護者(父)1人＋同行者(中学生と高校生の姉妹)2人
													</span>
												</li>
												<li>
													※0～1歳児は、安全確保のため抱っこひも、またはベビーカーでの入場をお願いします。
												</li>
											</UL_Notice>
										</li>
										<li>
											②親子エリア
											<P_Target>
												対象：鯖江市内外を問わず小学6年生以下のお子さまとそのご家族
											</P_Target>
											<UL_Notice>
												<li>
													※同行者として、同一世帯のご家族が入場できます。
													<br />
													<span className="indent">
														例）対象のお子様1人＋保護者(父)1人＋同行者(中学生と高校生の姉妹)2人{" "}
													</span>
												</li>
											</UL_Notice>
										</li>
										<li>
											③一般エリア
											<P_Target>
												対象：① ②
												の対象外の方や、同一世帯のご家族以外の同行者を含む方{" "}
											</P_Target>
											<UL_Notice>
												<li>
													※代表者1人に対して同行者3人まで入場できます。 <br />
												</li>
											</UL_Notice>
										</li>
									</UL_TableList>
								</div>
							</TableRow>

							<TableRow title="入場券申込期間">
								令和７年８月５日（火）～ 令和７年９月５日（金）
							</TableRow>

							<TableRow title="入場券入手方法">
								<div>
									<p>
										希望エリアのフォームURLを選択し、関係情報の入力をお願いします。
										<br />
										申込期間終了後の９月１２日（金）、申込者すべてに対しメールで入場券と入場口マップを送信いたします。{" "}
									</p>
									{/* spaced-topはリストの上に文章がある時にマージンをつけるため */}
									<UL_TableList className="spaced-top bold">
										<li>
											①鯖江市内園児エリアお申込み【400名】
											<DIV_ButtonWrapper>
												<Button onClick={() => goToTicketFormPage("enji")}>
													お申込みはこちら
												</Button>
											</DIV_ButtonWrapper>
										</li>
										<li>
											②親子エリアお申込み【400名】
											<DIV_ButtonWrapper>
												<Button onClick={() => goToTicketFormPage("oyako")}>
													お申込みはこちら
												</Button>
											</DIV_ButtonWrapper>
										</li>
										<li>
											③一般エリアお申込み【400名】
											<DIV_ButtonWrapper>
												<Button onClick={() => goToTicketFormPage("ippan")}>
													お申込みはこちら
												</Button>
											</DIV_ButtonWrapper>
										</li>
									</UL_TableList>
								</div>
							</TableRow>

							<TableRow title="入場券（例）">
								<DIV_TableTicketContainer>
									<DIV_TableTicket>
										<div>めがねのまちさばえSDGsフェス2025</div>
										<div>スペシャルステージ入場券</div>
										<DIV_TicketType>
											<span className="label">【エリア区分】</span>
											<span className="type">鯖江市内園児エリア</span>
										</DIV_TicketType>
										<p>
											9/20㊏ 12:00開場 13:00開演
											<br />
											鯖江市西山公園 円形芝生広場
										</p>
									</DIV_TableTicket>
								</DIV_TableTicketContainer>
							</TableRow>

							<TableRow title="エリア入場前の整列<br />（待機）について">
								<UL_TableList>
									<li>
										①エリア入場前の整列（待機）開始時間はフリーとします。到着順でお並びください。
									</li>
									<li>
										②エリア区分に応じて整列（待機）場所が異なります。該当の場所に整列（待機）ください。
									</li>
									<li>
										③エリア入場時（１２時００分）には、お申込者全員お揃いの上でのご入場にご協力ください。
									</li>
									<li>
										④エリア入場前に係員が入場券の確認を行いますので、入場券をご提示ください。
									</li>
									<li>
										⑤入場券の提示ができない方やお申込みをされていない方は、恐れ入りますが、すべてのエリア区分の方が入場後、フリーでのご入場となります。
									</li>
									<li>
										⑥整列（待機）場所以外に整列されたり係員の指示に従っていただけなかったりする場合は、入場をお断りさせていただきます。
									</li>
								</UL_TableList>
							</TableRow>

							<TableRow title="エリア入場方法">
								<UL_TableList>
									{/* indent改行後インデントつけたい時につける */}
									<li className="indent">
										①開場時間（１２時００分）となりましたら、以下の順でエリア内にご入場いただきます。
										<br />
										鯖江市内園児エリア、親子エリア、一般エリア
									</li>
									<li>
										②エリアに到着までは、慌てず、決して走らないでください。
									</li>
									<li>
										③再入場は可能ですが、その際は最後列に並び直しとなります。
									</li>
								</UL_TableList>
							</TableRow>

							<TableRow title="その他">
								{/* <div>
									<p>最新情報は特設サイトなどで随時公開していきます。</p>
									<DIV_ButtonWrapper>
										<Button onClick={goToTop}>最新情報はこちら</Button>
									</DIV_ButtonWrapper>
								</div> */}
								<UL_TableList>
									<li>
										①最新情報は特設サイトなどで随時公開していきます。{" "}
										<DIV_ButtonWrapper>
											<Button onClick={goToTop}>最新情報はこちら</Button>
										</DIV_ButtonWrapper>
									</li>
									<li>
										②会場内でのスマートフォンなどでのビデオ撮影、録音は一切禁止いたします。
									</li>
									<li>
										③熱中症対策のため、こまめな水分補給、帽子着用などをお願いいたします。
									</li>
								</UL_TableList>
							</TableRow>

							<TableRow title="個人情報保護方針">
								<UL_TableList>
									<li>
										当サイトを通じて提供いただく個人情報は、「鯖江市個人情報保護条例」に基づき、お問い合わせや各種申込への返信や確認などのための利用など、取扱目的の範囲内での利用を行います。
									</li>
									<li>
										収集した個人情報は、「鯖江市情報セキュリティポリシー」に基づき、所管の部署が厳重に管理し、漏えい、滅失、改ざんなどの防止措置を講じるとともに、保有する必要がなくなった個人情報は、確実かつ速やかに廃棄または消去します。
									</li>
								</UL_TableList>
							</TableRow>
						</dl>
					</DIV_CardContainer>
				</S_SECTION_container>
			</DIV_SectionWrapper>
		</>
	);
};

const DIV_SectionWrapper = styled(S_DIV_SectionWrapper)`
	background-color: ${COLORS.SEC_YELLOW_BG};
	padding-top: 0px;

	&.top-section {
		padding-top: 140px;
	}

	@media (max-width: 900px) {
		&.top-section {
			padding-top: 120px;
		}
	}
`;

const DIV_CardContainer = styled(S_DIV_CardContainer)`
	padding: 25px;

	// max-widthは、TableRowのレスポンシブと合わせる
	@media (max-width: 650px) {
		padding: 15px;
	}
`;

const UL_TableList = styled.ul`
	&.spaced-top {
		/* リストの間隔と揃える */
		margin-top: 20px;
	}

	&.bold {
		/* 正しくはliを太字にしたい */
		font-weight: bold;

		/* span_noticeは太字にしない */
		span {
			font-weight: normal;
		}
	}

	/* リスト間の間隔 margin-bottom変えたら、spaced-topも変える */
	> li {
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;

		&.indent {
			margin-left: 1em;
			text-indent: -1em;
		}
	}

	/* 最後のリストには不要 */
	> li:last-of-type {
		margin-bottom: 0px;
	}
`;

const P_Target = styled.p`
	font-size: 14px;

	@media (max-width: 650px) {
		font-size: 12px;
	}
`;

const UL_Notice = styled.ul`
	display: block;
	font-size: 12px;
	font-weight: normal;

	@media (max-width: 500px) {
		font-size: 10px;
	}

	.indent {
		display: inline-block;
		padding-left: 1em; /* 必要なだけ字下げ */
	}
`;

const DIV_TableTicketContainer = styled.div`
	@media (max-width: 650px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 3px;
	}
`;

const DIV_TableTicket = styled.div`
	border: 1px solid ${COLORS.BORDER};
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 10px;
	font-weight: bold;

	p {
		font-size: 12px;
		font-weight: normal;
	}
`;

const DIV_TicketType = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5px 0;
	span {
		display: block;

		&.label {
			font-size: 12px;
		}

		&.type {
			font-size: 18px;
			color: #ed6a02;
		}
	}
`;

const DIV_ButtonWrapper = styled.div`
	margin-top: 5px;
`;
