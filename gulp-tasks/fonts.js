"use strict";

import { paths } from "../gulpfile.babel";
import { task, src, dest } from "gulp";
import debug from "gulp-debug";

task("fonts", () => {
    return src(paths.fonts.src)
        .pipe(dest(paths.fonts.dist))
        .pipe(debug({
            "title": "Fonts"
        }));
});