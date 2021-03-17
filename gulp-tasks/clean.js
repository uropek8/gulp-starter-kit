"use strict";

import { task } from "gulp";
import del from "del";

task("clean", () => {
    return del(["./dist/*"]);
});