---
title: "AngularJS unit test and code coverage with Yeoman, Karma, Jasmine and PhantomJS"
description: "Learn how to generate code coverage reports for AngularJS apps scaffolded with Yeoman. This step-by-step guide helps developers improve test quality and maintainability using tools like Karma and Istanbul."
date: 2014-05-22
tags: ["angularjs", "unit-testing", "karma", "jasmine", "phantomjs", "yeoman"]
readingTime: "5 min read"
slug: "angularjs-how-to-generate-code-coverage-for-yeoman-scaffolded-apps"
---

## Using Karma, Jasmine and PhantomJS to run tests on your AngularJS projects

I shamefully admit that the first time I ever tested my frontend code was after I started using <a href="https://angularjs.org" target="_blank">AngularJS</a>. Before I had all kinds of excuses, however AngularJS was built with testing in mind and that definitely made a huge difference.

For the sake of simplicity I will be using <a href="http://yeoman.io" target="_blank">Yeoman</a> for this tutorial. The <a href="https://github.com/yeoman/generator-angular" target="_blank">Yeoman generator for AngularJS</a> definitely makes *testing AngularJS applications a breeze*. For example every time a controller is generated through the command line tool, this controller's test file is also generated automatically.

## Scaffolding a new application

Let's get started! First things first, make sure you have <a href="http://gruntjs.com" target="_blank">GruntJS</a>, <a href="http://yeoman.io" target="_blank">Yeoman</a> and the <a href="https://github.com/yeoman/generator-angular" target="_blank">AngularJS Generator</a> all installed globally:

```shell
npm install -g grunt-cli
npm install -g yo
npm install -g generator-angular
```

Once you are certain these three guys are installed, let's go ahead and scaffold a new AngularJS project:

```shell
mkdir angularjs-unit-test && cd $_
yo angular angularjs-unit-test
```

The AngularJS Genetator scaffolds a new application, it creates a `Main Controller` and its test by default. The controller file is located under `app/scripts/controllers/main.js` and its test file should be under `test/spec/controllers/main.js`.

Since everything is already in place we should be able to start testing and generating code coverage reports right away, right? *Wrong!* We need to teak our app's configuration a little bit before we are able to sucessfuly run `grunt test`.

## Setting up testing environment

Now that we have our application laid out, let's just tweak a couple of files:

**Step 1:**
Add `npm` dependencies that will allow `karma` to run tests and generate the code coverage report:

```shell
npm install karma-jasmine --save-dev
npm install karma-phantomjs-launcher --save-dev
npm install karma-coverage --save-dev
```

*Attention: We are using <a href="http://jasmine.github.io" target="_blank">Jasmine</a> as our testing framework and <a href="http://phantomjs.org" target="_blank">PhantomJS</a> as the default browser to run our tests. Don't worry about installing PhantomJS though, as the <a href="https://github.com/karma-runner/karma-phantomjs-launcher">karma-phantomjs-launcher</a> package includes a standalone executable `PhanthomJS` binary. Lastly, we are using <a href="https://github.com/karma-runner/karma-coverage" target="_blank">karma-coverage</a> to generate our code coverage.*

<br />

**Step 2:**
Start by modifying the `browsers` flag within the `karma.conf.js` file, which should be located right on the root directory of your application.


```javascript
// Located on line 49 on my local version of karma.conf.js
browsers: ['PhantomJS'],
```

In this same file, add the following lines right after the `browsers` flag to make sure code coverage reports are generated every time the code is tested:

```javascript
// Code coverage report
reporters: ['progress', 'coverage'],
preprocessors: {
  'app/scripts/**/*.js': ['coverage']
},
coverageReporter: {
  type: 'html',
  dir: 'coverage'
},

// Don't forget to add 'karma-coverage' to your list of plugins
plugins: [
  'karma-jasmine',
  'karma-coverage' // required for coverage
]
```

<br />

**Step 3:**
By now we should be able to run our test and see the code coverage report!

Go to your terminal and execute the following:

```shell
grunt test
```

You should see the following feedback on your screen:

```shell
Running "clean:server" (clean) task
Cleaning .tmp...OK

Running "concurrent:test" (concurrent) task
    
    Running "copy:styles" (copy) task
    Copied 1 files
    
    Done, without errors.
    
    
    Execution Time (2014-05-22 20:22:18 UTC)
    loading tasks  4ms  ▇▇▇▇▇▇▇▇▇▇▇▇ 29%
    copy:styles ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 64%
    Total 14ms
    
Running "autoprefixer:dist" (autoprefixer) task
Prefixed file ".tmp/styles/main.css" created.

Running "connect:test" (connect) task
Started connect web server on 127.0.0.1:9001.

Running "karma:unit" (karma) task
INFO [karma]: Karma v0.12.16 server started at http://localhost:8080/
INFO [launcher]: Starting browser PhantomJS
WARN [watcher]: Pattern "/Users/scruz/Sites/angularjs-unit-test/test/mock/**/*.js" does not match any file.
INFO [PhantomJS 1.9.7 (Mac OS X)]: Connected on socket WYv3ZzsuYUZWChR9mUGF with id 42383299
PhantomJS 1.9.7 (Mac OS X): Executed 0 of 1 SUCCESS (0 secs / PhantomJS 1.9.7 (Mac OS X): Executed 1 of 1 SUCCESS (0 secs / PhantomJS 1.9.7 (Mac OS X): Executed 1 of 1 SUCCESS (0.015 secs / 0.011 secs)

Done, without errors.


Execution Time (2014-05-22 20:22:17 UTC)
concurrent:test    1.6s  ▇▇▇▇▇▇▇▇▇▇ 39%
autoprefixer:dist  45ms  ▇ 1%
karma:unit         2.5s  ▇▇▇▇▇▇▇▇▇▇▇▇ 59%
Total 4.1s
```

<br />

## Finally! View your code coverage report

If everything ran successfuly for you as it did for me, you will notice that a directory called `coverage` was generated in the root of your application. Open the html file that was generated in your browser and it should look something like this:

![](/images/blog/2014-05-22-04-49-33-pm.png)
<br />
*File location: `coverage/PhantomJS(...)/index.html`*

And that's it for now! I wish I had this guide when I first had to generate a code coverage report in my Yeoman scaffolded application. So I hope this helps you as much as it did me.

### Demo
If you are a code sample kind of person, don't worry I've got you covered! Everything we covered on this tutorial is available on my GitHub account: <br /><a href="https://github.com/sergiocruz/angularjs-code-coverage" target="_blank">https://github.com/sergiocruz/angularjs-code-coverage</a>
