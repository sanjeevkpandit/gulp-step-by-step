# gulp-step-by-step
Learn basics of gulp step by step.

###Important gulp functions
- `gulp.task`: Define a task.
- `gulp.src`: Source of files(input).
- `gulp.dest`: Output location of the files resulted from process(es).
- `gulp.watch`: Observe any change in mentioned file(s) and act accordingly.
- `gulp.pipe`: Chain the processes.

###Steps
Each step is represented by corresponding branch. See the `gulpfile.js` for task(s) info.
#### step-0-init
Initiation of project and npm.

`npm init`

`npm install`

####step-1-install-gulp
Install gulp.

`npm install gulp --save`

Create `gulpfile.js` and `default` task(blank).

Run `gulp` in terminal to check.

####step-2-sass
Write a SASS file and convert it to a CSS file.

Install gulp-sass.

`npm install gulp-sass --save`

Create `sass` task in `gulpfile.js`. Also, create respective target folders.

Run `gulp sass` in terminal and check the files in target folders.

####step-3-concat-css
Combine CSS or compiled SCSS files into one file.

Install gulp-concat.

`npm install gulp-concat --save`

Create `concat-css` task in `gulpfile.js`. Also, create respective target folders.

Run `gulp concat-css` in terminal and check the files in target folders.

####step-4-concat-js
Combine JS or compiled JS files into one file.

Install gulp-concat (if not installed earlier).

`npm install gulp-concat --save`

Create `concat-js` task in `gulpfile.js`. Also, create respective target folders.

Run `gulp concat-js` in terminal and check the files in target folders.

####step-5-minify-js
Minify a JS file or concatenation of multiple JS files.

Install gulp-concat (if not installed earlier) and gulp-minify.

`npm install gulp-concat --save`

`npm install gulp-minify --save`

Create `minify-js` task in `gulpfile.js`. Also, create respective target folders.

Run `gulp minify-js` in terminal and check the files in target folders.

####step-6-es6
Convert a EcmaScript6(ES2015) file into JavaScript file using babel.

Install gulp-babel and babel-preset-es2015.

`npm install gulp-babel --save`

`npm install babel-preset-es2015 --save` (required for ES2015/ES6)

Create `es6` task in `gulpfile.js`. Also, create respective target folders.

Run `gulp es6` in terminal and check the files in target folders.

####step-7-watch-notify
Watch files for any change and notify on completion of task. Very useful while working on development.

Install gulp-notify.

`npm install gulp-notify --save`

Create `watch` task in `gulpfile.js`. Also, create respective target folders.

Run `gulp watch` in terminal and check the files in target folders. Also, observe in terminal and notification after saving any 
watching file(s) regarding the status of tasks.

####step-8-default-task
This is the default task for gulp. This task can be used in server(s) to run all tasks or some of them at once during the time of deployment.

List the tasks that need to be run at once.

####step-9-error-handle
Error(s) may occur during the compilation of different files, while working in dev environment. These errors should be handled in such a way that the developer is not distracted from his/her current task flow. For e.g. during `gulp watch`, catch the error(s) if any, and do not terminate the `watch` task i.e, let the task wait for another `Ctrl + S`(Save File) action.
Create a function `errorHandler` that displays the error notification and doesn't terminate the `gulp watch` task.

###Notes:
- Try swapping `minify` and `concat` functions in any of the task.

####Try more and have fun !!! :smile: :smile: :smile: :thumbsup:
