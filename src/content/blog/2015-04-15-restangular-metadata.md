---
path: "/blog/add-meta-data-to-your-restangular-responses"
date: "2015-04-15"
title: "Add meta data to your Restangular responses"
---

I love <a href="https://github.com/mgonto/restangular" target="_blank" rel="noopener noreferrer">Restangular</a> and all the functionality it provides, and its API is amazing! Big shout out to <a href="https://twitter.com/mgonto" target="_blank" rel="noopener noreferrer">@mgonto</a> whom I had the pleasure to meet and chat with in person at <a href="http://ng-conf.org" target="_blank" rel="noopener noreferrer">ng-conf 2015</a>!

Today I ran into something new while integrating with a RESTful backend. The backend returned meta data in its response. Nothing too out of the norm there, I just hadn't dealt with that using Restangular yet.

To put things into context, here is a sample response from the server:

```javascript
// Sample data from RESTful server
{
  data: [
    { name: 'John' },
    { name: 'Doe' }
  ],
  meta: {
    records: 2
  }
}
```

## Extracting `.data` object from backend response

Usually I setup an interceptor to extract the `.data` object from an APIs response. I like doing that so I don't have to repeat myself too much throughout the rest of my code.

```javascript
angular
  .module('app')
  .config(['RestangularProvider', function(RestangularProvider) {
    // Always extracts `data` from response
    RestangularProvider.setResponseExtractor(function extractResponse(serverResponse, operation) {
      return serverResponse.data;
    });
  }]);

```

The code above just makes sure Restangular promises receive the unwrapped `.data` object. Feel free to visit <a href="https://github.com/mgonto/restangular#how-to-configure-them-globally" target="_blank" rel="noopener noreferrer">Restangular's Documentation</a> to learn more about this works.

## At last, the meta data

The above solution looks great! But how can you have access to both `.data` and `.meta` from your controllers now?

The above solution looks great! But how can you have access to `.data` and `.meta` from your controllers now? My 5-minute fix was to attach the `.meta` object to `.data` (it does feel ugly I am not going to lie):

```javascript
angular
  .module('app')
  .config(['RestangularProvider', function(RestangularProvider) {
    // Always extracts `data` from response
    RestangularProvider.setResponseExtractor(function extractResponse(serverResponse, operation) {
    
      // Response from server
      var response = serverResponse.data;
      
      // Attaches meta object to the response object
      if ('meta' in serverResponse) {
        response.meta = serverResponse.meta;
      }
      
      return response;
    });
  }]);

```

Simple right?

This solution didn't seem right to me at first. "What if `serverResponse.data` is an array" I thought to myself. This might break things right?  Nope, no breaking things. It turns out arrays in javascript were objects before they became arrays. So you can add properties to your arrays just fine.

PS: I have only tested this solution in Chrome. Not sure how other browsers will like this idea.

I'm also anxious to hear about more elegant solutions to this problem, as the more I dig through Restangular, the more n00b I feel about it.

So if you have any feedback, please drop a line below :)
