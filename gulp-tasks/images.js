"use strict";

import { paths } from "../gulpfile.babel";
import { task, src, dest } from "gulp";
import gulpif from "gulp-if";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import debug from "gulp-debug";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

task("images", () => {
    return src(paths.images.src)
        .pipe(newer(paths.images.dist))
        .pipe(gulpif(production, imagemin()))
        .pipe(dest(paths.images.dist))
        .pipe(debug({
            "title": "Images"
        }))
        .pipe(browsersync.stream());
});
