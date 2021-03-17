"use strict";

import { parallel, series } from "gulp";
import requireDir from "require-dir";

requireDir("./gulp-tasks/");

export const paths = {
	views: {
		src: ["./src/views/**/*.html", "./src/views/pages/*.html"],
		dist: "./dist/",
		watch: ["./src/blocks/**/*.html", "./src/views/**/*.html"],
	},
	styles: {
		src: "./src/styles/main.{scss,sass}",
		dist: "./dist/styles/",
		watch: ["./src/blocks/**/*.{scss,sass}", "./src/styles/**/*.{scss,sass}"],
	},
	scripts: {
		src: "./src/js/index.js",
		dist: "./dist/js/",
		watch: ["./src/blocks/**/*.js", "./src/js/**/*.js"],
	},
	images: {
		src: [
			"./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
			"!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
		],
		dist: "./dist/img/",
		watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}",
	},
	sprites: {
		src: "./src/img/svg/*.svg",
		dist: "./dist/img/sprites/",
		watch: "./src/img/svg/*.svg",
	},
	fonts: {
		src: "./src/fonts/**/*.{woff,woff2}",
		dist: "./dist/fonts/",
		watch: "./src/fonts/**/*.{woff,woff2}",
	},
	favicons: {
		src: "./src/img/favicon/*.{jpg,jpeg,png,gif}",
		dist: "./dist/img/favicons/",
	},
	gzip: {
		src: "./src/.htaccess",
		dist: "./dist/",
	},
};

export const development = series(
	"clean",
	parallel([
		"views",
		"styles",
		"scripts",
		"images",
		"sprites",
		"fonts",
		"favicons",
	]),
	parallel("serve")
);

export const prod = series(
	"clean",
	parallel([
		"views",
		"styles",
		"scripts",
		"images",
		"sprites",
		"fonts",
		"favicons",
		"gzip",
	])
);

export default development;
