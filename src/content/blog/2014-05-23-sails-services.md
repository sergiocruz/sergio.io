---
path: "/blog/sailsjs-services-how-to-use-them-in-your-controllers"
date: "2014-05-23"
title: "SailsJS Services: What they are and how to use them"
---

## So what are SailsJS Services?

*Great question!* The <a href="http://sailsjs.org" target="_blank" rel="noopener noreferrer">SailsJS website</a> does not have much content about `Services` on their <a href="http://sailsjs.org/#!documentation" target="_blank" rel="noopener noreferrer">documentation</a>. I guess they figure `Services` are pretty self-explanatory; which is true for the most part. But I sure would have had appreciated a simple guide describing `Services` when I first started using SailsJS for my applications.

**SailsJS Services are pieces of reusable code that can be shared by your controllers.** Your business logic should live in your `Service` *(and not in your controller!)*. I know I am stepping on egg shells here, but unfortunately many web frameworks have bastarized the definition of models (the "M" in "MVC") and limited it only to where *database stuff happens*. However by definition `Models` are much more than your Data Access Layer. <a href="https://twitter.com/codinghorror" target="_blank" rel="noopener noreferrer">@codingerror</a> put it beautifully when <a href="http://blog.codinghorror.com/understanding-model-view-controller/" target="_blank" rel="noopener noreferrer">describing MVC Models</a>: "Models represent knowledge. A model could be a single object (rather uninteresting), or it could be some structure of objects."

So in other words, SailsJS Services are kind of models, but we'll just stick to the `Services` nomenclature in a SailsJS context to make our lives simpler :)

## How to write SailsJS Services

Below is a very simple SailsJS Service:

```javascript
// File location: /api/services/MyFirstService.js


var MyFirstService = {
  sayHello: function sayHelloService() {
    return 'Hello I am the real Service';
  }
};


module.exports = MyFirstService;
```

## How to use Services in my Controllers

```javascript
var TestingServicesController = {

  index: function(req, res) {

    // Gets hello message from service
    var helloMessage = MyFirstService.sayHello();

    // Returns hello message to screen
    res.send('Our service has a message for you: ' + helloMessage);
  }

  
};

module.exports = TestingServicesController;
```

As you can see above everything simply happens *magically* behind the SailsJS curtains. And by *magically* I mean that SailsJS *automagically* injects services into your controllers:

## A few words on unit testing

As you can imagine, SailsJS' *magical* way of injecting dependencies into your controllers makes testing a bit difficult. Fortunately I've already got this topic covered on this article: [Unit testing Sails JS: How to mock SailsJS Services in Controllers](/blog/unit-testing-sails-js-how-to-mock-sailsjs-services-in-controllers)

### Demo and code samples
As usual, all my code is available on my GitHub account. Feel free to check it out, fork it, modify it and most importantly have fun with it: <a href="https://github.com/sergiocruz/sails-unit-test" target="_blank" rel="noopener noreferrer">https://github.com/sergiocruz/sails-unit-test</a>
