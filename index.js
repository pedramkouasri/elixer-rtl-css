var elixir = require("laravel-elixir");
var gulp = require('gulp');
var rename = require('gulp-rename');
var rtlcss = require('gulp-rtlcss');

elixir.extend('rtlCss', function (src, out, opts) {
    return gulp.src(src)
      .pipe(rtlcss())
      .pipe(rename({ suffix: '.rtl' }))
      .pipe(gulp.dest(out))
      .pipe(new elixir.Notification('Css RTL Success!'));
});
