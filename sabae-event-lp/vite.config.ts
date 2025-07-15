import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json" assert { type: "json" };

// https://vite.dev/config/
export default defineConfig({
	base: "/sabae-event-lp/",
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
});
