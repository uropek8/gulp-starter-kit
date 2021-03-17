"use strict";

import { paths } from "../gulpfile.babel";
import { task, src, dest } from "gulp";
import svgSprite from "gulp-svg-sprite";
import debug from "gulp-debug";
import browsersync from "browser-sync";

task("sprites", () => {
    return src(paths.sprites.src)
        .pipe(svgSprite({
            shape: {
                dest: "intermediate-svg"
            },
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(dest(paths.sprites.dist))
        .pipe(debug({
            "title": "Sprites"
        }))
        .on("end", browsersync.reload);
});