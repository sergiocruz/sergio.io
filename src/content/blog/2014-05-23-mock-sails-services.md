---
title: "Unit testing Sails JS: How to mock SailsJS Services in Controllers"
description: "Learn how to mock SailsJS services when unit testing controllers. This guide shows you how to lift Sails in tests and properly stub services using Sinon for effective testing."
date: 2014-05-23
tags: ["sailsjs", "unit-testing", "mocking", "sinon", "services"]
readingTime: "6 min read"
slug: "unit-testing-sails-js-how-to-mock-sailsjs-services-in-controllers"
---

On my previous article get your [SailsJS testing environment setup, and also how to run a *basic test*](/blog/unit-test-sailsjs-with-mocha-and-instanbul-for-code-coverage/). But let's face it: when it comes to real life, *basic is never enough! On this article I will be covering a more realistic scenario:

Let's suppose you wrote a <a href="https://sailsjs.org/#!documentation/controllers" target="_blank">SailsJS Controller</a> and a SailsJS Service. You got them to work together, and now you want to mock the service while testing your controller.

The problem is that SailsJS *magically* injects Services -- and Models, and everything else -- into the Controller, making it difficult to simply call `HelloController.index()` without *lifting SailsJS*. We need the dependencies to be in place (otherwise we will get a bunch of ugly *undefined is not a function* kind of errors.

Fortunately, *lifting SailsJS* in code is almost as easy as running `sails lift` on your command line, and that is exactly what we are going to do in order run our tests.

## So... how do I mock services in my controllers?

*I'm glad you asked!* First things first, pretend we already have a controller and a service in place: The controller is called `TestingServicesController` and the service is called `MyFirstService`.

**Step 1:**
Start by instantiating SailsJS in your test file:

```javascript
var Sails = require('sails'),
    sinon = require('sinon'),
    assert = require('assert');
```

**Step 2:**
Lift SailsJS before executing each test and *lower* it after the test is executed:
```javascript

var app,
	testingServicesController;

// Gets run before each test
before(function beforeControllerTest(done) {

  // Lift Sails and start the server
  Sails.lift({

    log: {
      level: 'error'
    },

  }, function(err, sails) {
  
  	// Instantiates new sails application
    app = sails;
    
    // Instantiates controller
    testingServicesController = app.controllers.testingservices;
    
    // Lets testing framework know async call is done
    done(err, sails);
  });
});

// Gets run after each test
after(function afterControllerTest(done){

  // Destroys application
  app.lower(done);
  
});
```

**Step 3:**
Mock service and test controller

```javascript
it('should have called mocked service', function() {

  // Mocking our service
  sinon.stub(app.services.myfirstservice, 'sayHello', function() {
    return 'Hello I am the mocked Service';
  });

  // JSON object spy
  var send = sinon.spy();

  // Executes controller action
  testingServicesController.index(null, {
    'send': send
  });

  // Makes sure the mocked service was called
  // instead of the real one
  assert(send.called);
  assert(send.calledWith('Our service has a message for you: Hello I am the mocked Service'));

  // Restores our mock to the original service
  app.services.myfirstservice.sayHello.restore();
  // Notice that the above action this is very important
  // because if the original action does not get restored,
  // then this mock will be used in other tests
  
});
```

## Putting the pieces of the puzzle together

Below is what my code looks like when we put all three steps together:

```javascript
var Sails = require('sails'),
    sinon = require('sinon'),
    assert = require('assert');

describe('The TestingServices Controller', function() {

  // app and testingServicesController 
  var app,
      testingServicesController;

  // Global before hook
  before(function beforeControllerTest(done) {

    // Lift Sails and start the server
    Sails.lift({

      log: {
        level: 'error'
      },

    }, function(err, sails) {
      app = sails;

      // TestingServices controller
      testingServicesController = app.controllers.testingservices;

      done(err, sails);
    });
  });

  after(function afterControllerTest(done){
    app.lower(done);
  });

  describe('when we invoke the index action', function() {

    before(function() {
      // Mocking our service
      sinon.stub(app.services.myfirstservice, 'sayHello', function() {
        return 'Hello I am the mocked Service';
      });
    });

    after(function() {
      // Restores our mock to the original service
      app.services.myfirstservice.sayHello.restore();
    });

    it('should have called mocked service', function() {

      // JSON object spy
      var send = sinon.spy();

      // Executes controller action
      testingServicesController.index(null, {
        'send': send
      });

      // Makes sure the mocked service was called
      // instead of the real one
      assert(send.called);
      assert(send.calledWith('Our service has a message for you: Hello I am the mocked Service'));
    });

  });
});

```

### Demo and code samples
You know you can always count on me when it comes to post my working code to GitHub! Check out the full working copy here:<br /><a href="https://github.com/sergiocruz/sails-unit-test" target="_blank">https://github.com/sergiocruz/sails-unit-test</a>
