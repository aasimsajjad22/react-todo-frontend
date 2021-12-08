## go-todo-frontend [![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://app.circleci.com/pipelines/github/aasimsajjad22/react-todo-frontend/)
The frontend app has been created with ReactJs following ATDD Approach
### How to run
##### - Run through Docker
- If you have docker installed then simply run `docker-compose -f docker-compose.dev.yml up` to setup and run the application in docker environment.
#### - Run Manually
- First install node depending on your OS [Install NodeJs](https://nodejs.org/en/download/).
- Clone the repository.
- `cd` in to `go-todo-backend` directory and type `npm install` to install all the dependencies
- `npm start` to launch an application it will be run on [http://localhost:3000](http://localhost:3000)

#### Project Structure.
- [ ] **pact**
  - contains pact configuration and contracts to test against consumer and producer 
- [ ] **src/actions**
  - contains actions to perform http calls to backend apis
- [ ] **src/components**
  - contains add and list component for adding and listing todos also contains unit tests for both components.
- [ ] **src/contractTest**
  - contains test to check the integration with backend apis, basically checking and verifying with pact and jest. 
- [ ] **src/e2etesting**
  - testing end to end integration/acceptance testing.
- [ ] **src/reducers**
  - reducer for state management.
- [ ] **App.js**
  - starting point to register component and reducer etc


#### Run Tests
- To run unit tests, type `npm test`
- To run contract tests type `npm test:pact`
- To run e2e tests type `npm test-e2e`



