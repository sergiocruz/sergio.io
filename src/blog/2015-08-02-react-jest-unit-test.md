---
path: "/blog/reactjs-unit-test-and-code-coverage-with-jest"
date: "2015-08-02"
title: "React unit test and code coverage with Jest and Istanbul"
---

The recommended testing framework for [React](http://facebook.github.io/react) is [Jest](http://facebook.github.io/jest). When I wrote this post getting a testing environment setup was not easy at all. So I decided to write this article describing some basic steps.

## Testing ReactJS with Jest

**Step 1:** Get your new project setup (`npm init`)

**Step 2:** Bring in npm dependencies:

- `npm install facebook/jest#0.5.x --save-dev`
- `npm install babel-jest --save-dev`

**Step3:** Add the following lines to your `package.json` file:

```javascript
"scripts": {
  "test": "jest",
},
"jest": {
  "collectCoverage": true,
  "collectCoverageOnlyFrom": {
    "app/components/App.js": true
  },
  "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
  "testFileExtensions": [
    "es6",
    "js"
  ],
  "moduleFileExtensions": [
    "js"
  ],
  "unmockedModulePathPatterns": [
    "react"
  ]
}
```

_In the `collectCoverageOnlyFrom` object, feel free to replace `app/components/App.js` with a real file name within your project. At the time of this writing, wildcard paths were not allowed. As a result, you have to specify each individual file that you want to have reported on your code coverage reports. Silly I know but don't worry, the Jest team is already [working on a fix for this](https://github.com/facebook/jest/issues/433)._


**Step 4:** Write your component:

```javascript
// File location: app/components/App.js
var React = require('react');;

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);

```

_Please note that I used react version 0.13.x to produce this tutorial. Starting on react version 0.14 the syntax to render components on your DOM will be different. It should look something like the following: `ReactDOM.render(<App />, node);`. Learn more about this on the [docs page](https://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html#two-packages)._

**Step 5:** Create a `__tests__` directory on your project's root and write your first test.

_**Protip:** Jest's conventions suggest using a directory called `__tests__` on your project's root. Good news is you can change that, [check out the docs](http://facebook.github.io/jest/docs/api.html#config-testdirectoryname-string)._

```javascript
// File location: __tests__/app/App-test.js
jest.dontMock('../../app/components/App');

var React require('react/addons');
var App require('../../app/components/App');
var TestUtils = React.addons.TestUtils;

describe('App', function() {

  it('renders with correct text', function() {

    var app = TestUtils.renderIntoDocument(
      <App />
    );

    var appNode = React.findDOMNode(app);
	
    // Asserts that the text in the <h1> tag
    // is equal to "Hello World" (like our App component)
    expect(
      appNode.querySelector('h1').textContent
    ).toEqual('Hello World');

  });

});

```

**Step 6:** Run tests and you should be all done: `npm test`

PS: Don't forget to checkout the `coverage` directory. It contains all your code coverage reports.

### A word on conventions

For my projects, I decided to have an `app` directory where all my code lives. I then replicate the `app` directory within `__tests__` directory. That way all my files and test files have the same name, except the test file names end with a `-test` after its name. For example: the component file `app/App.js` would have its test in the following location: `__tests__/app/App-test.js`.

### Code sample
If you're anything like me, you like seeing code samples. Feel free to check out the app I have been writing. It uses some of the conventions I've described in this post: https://github.com/sergiocruz/react-connect4

Last thing is: things have been moving too fast with React and Jest. So it is possible that this post will be completely irrelevant in the next few weeks. I will do my best to keep things updated, but feel free to help me doing so :) . With that said, please feel free to leave comments with questions. Also feel free to ping me on twitter [@hashtagserg](https://twitter.com/hashtagserg).
