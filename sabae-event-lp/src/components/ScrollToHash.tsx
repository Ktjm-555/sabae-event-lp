import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ScrollToHash = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash && location.hash.length > 1) {
			const id = location.hash.replace("#", "");

			// 0.1秒だけ待ってからDOMにアクセス（マウント直後対応）する
			setTimeout(() => {
				const target = document.getElementById(id);
				if (target) {
					target.scrollIntoView({ behavior: "smooth" });
				}
			}, 100);
		} else {
			// ハッシュが無いならスクロールトップに戻す
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		}
	}, [location]);

	return null;
};
