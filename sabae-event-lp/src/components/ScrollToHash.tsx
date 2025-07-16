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
		}
	}, [location]);

	return null;
};
