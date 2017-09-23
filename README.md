# Dor Coding Exercise

This is a simple React/Redux application that displays the day by day in_count for a store returned by the dôr API. The in_count is the number of people who entered this demo store on that date.

## Features of this app:
- List the returned days, and display the in_count for each day. Show all days returned by the API.
- A refresh button and "last refreshed at" time that allows you to refresh the data
- The app displays "Loading..." while it is requesting data from the server
- The app has a few tests verifying it's functionality


## FOR DEVELOPERS ##
To utilize our repo, please do the following:

1. Fork & clone this repository
2. Do an NPM install inside your terminal to obtain necessary node modules: `npm install`
3. To run this app locally, run `npm start` inside your terminal to start up a development server with which you can preview your work at any given time.

## Testing ##
I understand how important testing is for a product. I screenshot of the testing coverage from the terminal

1. run ```npm test``` to run all the Testing
2. run ```npm test -- --coverage``` to see the test coverage

## Technologies Used

The app is currently built with Javascript, React and Redux.
Other pieces of technologies include:

* [React-Promise-Middleware](https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/introduction.md)(A middleware that will resolve a promise into one of the three results: FULFILLED, REJECTED or PENDING)

* [Redux-Thunk](https://github.com/gaearon/redux-thunk)(A middleware orchestrates an asynchronous control flow with thunk action creators dispatching each other and returning Promises to wait for each other’s completion)
