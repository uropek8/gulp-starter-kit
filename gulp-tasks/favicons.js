"use strict";

import { paths } from "../gulpfile.babel";
import { task, src, dest } from "gulp";
import favicons from "gulp-favicons";
import debug from "gulp-debug";

task("favicons", () => {
    return src(paths.favicons.src)
        .pipe(favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe(dest(paths.favicons.dist))
        .pipe(debug({
            "title": "Favicons"
        }));
});