"use strict";

import { paths } from "../gulpfile.babel";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import { task, src, dest } from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";

const webpackConfig = require("../webpack.config.js"),
    argv = yargs.argv,
    production = !!argv.production;

webpackConfig.mode = production ? "production" : "development";
webpackConfig.devtool = production ? false : "source-map";

task("scripts", () => {
    return src(paths.scripts.src)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulpif(production, rename({
            suffix: ".min"
        })))
        .pipe(dest(paths.scripts.dist))
        .pipe(debug({
            "title": "JS files"
        }))
        .pipe(browsersync.stream());
});
