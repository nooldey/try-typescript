const gulp = require("gulp")
const ts = require("gulp-typescript")
const project = ts.createProject("tsconfig.json")
const uglify = require("gulp-uglify")

gulp.task("default", () => {
    return project.src()
        .pipe(project())
        .js.pipe(gulp.dest("dist"))
})