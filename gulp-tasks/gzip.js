"use strict";

import { paths } from "../gulpfile.babel";
import { task, src, dest } from "gulp";
import debug from "gulp-debug";

task("gzip", () => {
    return src(paths.gzip.src)
        .pipe(dest(paths.gzip.dist))
        .pipe(debug({
            "title": "GZIP config"
        }));
});