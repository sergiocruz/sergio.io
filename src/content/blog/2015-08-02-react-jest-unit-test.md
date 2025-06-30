---
path: "/blog/reactjs-unit-test-and-code-coverage-with-jest"
date: "2015-08-02"
title: "React unit test and code coverage with Jest and Istanbul"
---

The recommended testing framework for [React](https://reactjs.org/) is [Jest](https://jestjs.io/). When I wrote this post getting a testing environment setup was not easy at all. So I decided to write this article describing some basic steps.

## With Create React App

If you used [Create React App](https://create-react-app.dev/) to generate your project, then your project is pre-configured to generate [Code Coverage Reports](https://create-react-app.dev/docs/running-tests/#coverage-reporting). To generate a report, run this command:

```shell
npm test -- --coverage
```

Notice a new directory called `/coverage` will be created at the root of your project.

## Configuring Jest to run React Tests

**Step 1:**  Get your new project setup (`npm init`)

**Step 2:** Bring in npm dependencies:

- `npm install --save-dev jest`
- `npm install --save-dev babel-jest @babel/core @babel/preset-env`

**Step3:** Add the following lines to your `package.json` file:

```javascript
"scripts": {
  "test": "jest",
},
"jest": {
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ]
}
```

**Step 4:** Write your component:

```jsx
// File location: app/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

```

**Step 5:** Create a `__tests__` directory on your project's root and write your first test.

_**Protip:** Jest's conventions suggest using a directory called `__tests__` on your project's root. Good news is you can change that, [check out the docs](http://facebook.github.io/jest/docs/api.html#config-testdirectoryname-string)._

```javascript
// File location: __tests__/app/App-test.js
jest.dontMock('../../app/components/App');

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import App from '../../app/components/App';

describe('App', function() {

  it('renders with correct text', function() {

    const app = ReactTestUtils.renderIntoDocument(
      <App />
    );

    const appNode = React.findDOMNode(app);
	
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
