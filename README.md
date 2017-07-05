ASAPP Frontend Challenge
========================

This is a sample application built for ASAPP's frontend coding challenge. It
uses the following libraries and tools:

- react
- redux
- react-router-v4
- webpack
- node.js (v8.1.3)
- express
- ES2017

The data is mocked via `common/js/fixtures`, and API requests are simulated by
a fake fetch, which is just a delayed Promise in `common/js/lib/api`. This can
easily be replaced by a real request to a server since it is already set up for
asynchronous actions.

To start the demo, make sure you have the following pre-requisites:

- node.js (7.x or higher)
- yarn

Then, install the package dependencies:

```
yarn install
```

Start the server:

```
yarn start
```

Webpack will compile the application. Once it is done, browse to http://localhost:3000
on your machine. Open up the developer console to see debug data.

## Challenge Details

Welcome to your challenge project!

For this challenge, we ask that you implement a solution at home in your own time. Please send us your results - including code, commit history if available, and a readme with setup instructions - within a week. If you need more time, let us know.


The Details
-----------

Your challenge is to build a split screen chat interface. In one browser tab, there should be two side-by-side chat windows. On the left is Laura's chat window and she's talking to Rob. On the right is Rob's chat window and he's talking to Laura.

In her window, Laura is able to type and send a message to Rob. The message should appear as a sent message in her window and as a received message in his window. Additionally, when Laura is in the middle of typing, there should be an indicator in Rob's window that she's typing. And all this should work in the other direction for Rob sending a message to Laura.

This challenge is contained to one browser tab, but in real life, Laura and Rob would be on different devices and messages would be sent over a central server. Building a server isn’t part of this challenge, but we ask that you structure your code in such a way that it’d be straightforward to get rid of the split screen and plug in a server to support real remote chatting.


Suggestions
-----------

- At ASAPP, we use a lot of React. For the challenge, we'd recommend any JavaScript based framework such as React or Angular.
- Use open source libraries rather than reinventing the wheel. Here are a couple of relevant tools that we use:
    github.com/facebook/react
    github.com/moment/moment
- Focus on both user experience and code quality. What’s the UI/UX like for typical chat applications (think Slack, iMessage, etc)? What are standard best practices for a modern javascript, single page application? How will your code extend if features are added or requirements change?
- The project is designed to not need a server, because we want to see you shine on frontend development. If you really want to build a backend, we ask that you only do so if you feel the backend will be a good reflection of your coding abilities.
- Have fun!
