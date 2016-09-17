# How to run gulp server

- Cd to the folder and run -> 'npm install gulp --save'
- 'npm install static-server@2.0.0 --save'
- do new file server.js
- node server.js

# How to run gulp watch

- watch function in gulpfile.js
- gulp watch

# How to run gulp livereload

- npm install --save-dev gulp-livereload
- livereload function in gulpfile.js
- in html:'script src="<http://localhost:35729/livereload.js>" /script'
- gulp watch

# How to run gulp concatenate css

- npm install gulp-concat --save-dev
- style functions
- gulp styles

# How to run gulp minify css

- npm install gulp-minify-css --save-dev
- apply changes in styles function in gulpfile.js
- run gulp styles

# How to watch gulp minify css

- see watch function
- run 'gulp watch'

# How to handle error

- npm install gulp-plumber --save-dev
- modify scripts function

# How to Source Map
- npm install gulp-sourcemaps --save-dev

# How to SASS
- npm install gulp-sass --save-dev

# How to es 6 run in normal browser
- install babel
- npm install --save-dev gulp-babel babel-preset-es2015

# Handlebars.js
- npm install --save-dev gulp-wrap gulp-declare gulp-handlebars Handlebars
