import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json" assert { type: "json" };

export default defineConfig(({ mode }) => {
	const isStg = mode === "stg";
	const basePath = isStg ? "/sabae-event-lp/" : "/";

	return {
		base: basePath,
		plugins: [
			react({
				babel: {
					plugins: ["@emotion/babel-plugin"],
				},
			}),
		],
		define: {
			"import.meta.env.VITE_APP_VERSION": JSON.stringify(pkg.version),
		},
	};
});
