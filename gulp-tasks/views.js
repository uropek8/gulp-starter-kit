"use strict";

import { paths } from "../gulpfile.babel";
import { task, src, dest } from "gulp";
import include from "gulp-file-include";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

task("views", () => {
    return src(paths.views.src)
        .pipe(include({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulpif(production, replace(".css", ".min.css")))
        .pipe(gulpif(production, replace(".js", ".min.js")))
        .pipe(dest(paths.views.dist))
        .pipe(browsersync.stream());
});