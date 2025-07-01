---
title: 'Unit test SailsJS with Mocha and generate code coverage with Istanbul'
description:
  'Unit test your SailsJS applications using Mocha and generate code coverage
  reports with Istanbul. Step-by-step guide for JavaScript developers working
  with Node and SailsJS frameworks.'
date: 2014-05-21
tags: ['sailsjs', 'unit-testing', 'mocha']
readingTime: '5 min read'
slug: 'unit-test-sailsjs-with-mocha-and-instanbul-for-code-coverage'
---

## Unit testing JavaScript is easy they said. It only takes a few seconds they said.

_And they were right for the most part! Well, maybe seconds is an exaggeration
but we can definitely achieve this with very few minutes_

So you fired up your first `hello world` app using
<a href="https://sailsjs.org" target="_blank">SailsJS</a>, it was super simple
and you started wondering if testing your app would be as simple. Soon after you
realized this was not the case and much like everything else related to testing
in JavaScript there is not just one right answer.

Perhaps you may have much more experience with SailsJS and have way gone beyond
the `hello world` phase and now is time to make sure your application is
reliable. Unit testing is part of the solution when it comes to code
reliability.

**\*Before we start:** Are you a total SailsJS n00b? Follow the official
<a href="https://sailsjs.org/#!getStarted" target="_blank">Getting Started</a>
guide to get SailsJS installed before proceeding.\*

### Without further ado, let's get started:

**Step 1:** Add the following dependencies to your project:

```bash
npm install mocha --save-dev
npm install assert --save-dev
npm install sinon --save-dev
npm install grunt-mocha-istanbul --save-dev
```

**Step 2:** Add a `/test` directory to the root directory of your application
that mimics the format of the `/api` directory. Your new root directory
structure should look something like this:

```
/api
/assets
/config
/test
  /adapters
  /controllers
  /models
  /policies
  /services
/views
.gitignore
app.js
Gruntfile.js
package.json
README.md
```

**Step 3:** Modify your `Gruntfile.js`

First add the following snippet at the end of your `grunt.initConfig()`
_(located around line 414 in my case)_

```javascript
mocha_istanbul: {
  coverage: {
    src: 'test', // the folder, not the files
    options: {
      coverageFolder: 'coverage',
      mask: '**/*.spec.js',
      root: 'api/'
    }
  }
}
```

And add the two following snippet right before the file ends: _(again around
line 496 in my case)_

```javascript
// Adds "grunt-mocha-istanbul" npm task
grunt.loadNpmTasks('grunt-mocha-istanbul');

// Adding test task enabling "grunt test" command
grunt.registerTask('test', ['mocha_istanbul:coverage']);
```

**Step 4:** Create your first test

For the sake of simplicity let's create a HelloController and its test:

```javascript
/**
 * Sails Controller: HelloController
 * File location: api/controllers/HelloController.js
 */
module.exports = {
  index: function (req, res) {
    res.send('Hello World');
  },
};
```

```javascript
/**
 * Test File: Testing HelloController
 * File location: test/controllers/HelloController.spec.js
 */
var HelloController = require('../../api/controllers/HelloController'),
  sinon = require('sinon'),
  assert = require('assert');

describe('The Hello Controller', function () {
  describe('when we invoke the index action', function () {
    it('should return hello world message', function () {
      // Mocking res.send() method by using a sinon spy
      var send = sinon.spy();

      // Executes controller action
      HelloController.index(null, {
        send: send,
      });

      // Asserts send() method was called and that it was called
      // with the correct arguments: 'Hello World'
      assert(send.called);
      assert(send.calledWith('Hello World'));
    });
  });
});
```

**Step 5:** Execute test

Execute the following command on your Terminal:

```bash
grunt test
```

The feedback you will receive should be similar to the following:

```bash
Running "mocha_istanbul:coverage" (mocha_istanbul) task

  ․

  1 passing (6ms)

===================================================================
Writing coverage object [/Users/scruz/Sites/sails-unit-test/coverage/coverage.json]
Writing coverage reports at [/Users/scruz/Sites/sails-unit-test/coverage]
===================================================================

======================== Coverage summary =========================
Statements   : 100% ( 2/2 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 2/2 )
===================================================================
>> Done. Check coverage folder.

Done, without errors.
```

Also by now you may have realized the `/coverage` folder was generated on your
application's root directory. Open the following html file on your browser to
see your current code coverage: `/coverage/lcov-report/index.html`

**And... we're all done!**

I hope this helped you as much as it helped me! Feel free to contact me with any
questions.

**Demo:** a working code sample for what we have accomplished in this tutorial
is available on my GitHub account:
<a href="https://github.com/sergiocruz/sails-unit-test" target="_blank">https://github.com/sergiocruz/sails-unit-test</a>

Enjoy!
