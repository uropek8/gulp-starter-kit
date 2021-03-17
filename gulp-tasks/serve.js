"use strict";

import { paths } from "../gulpfile.babel";
import { task, watch, parallel } from "gulp";
import browsersync from "browser-sync";

task("serve", () => {
    browsersync.init({
        server: "./dist/",
        port: 4000,
        notify: true
    });

    watch(paths.views.watch, parallel("views"));
    watch(paths.styles.watch, parallel("styles"));
    watch(paths.scripts.watch, parallel("scripts"));
    watch(paths.sprites.watch, parallel("sprites"));
    watch(paths.images.watch, parallel("images"));
    watch(paths.fonts.watch, parallel("fonts"));
});
