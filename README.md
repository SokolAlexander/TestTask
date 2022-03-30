# Task for React Native Developer

The goal is to create a simple app which determines gender of given name and localy stores usage statistics. Based on https://genderize.io/ API.

## App structure

2 Screns:

1. `Home Screen` - simple UI where you can enter the name and receive it's gender.
2. `Statistics Screen` - will show statistics of app usage: how many names were determined, what percent of names were male and what female, what is the most popular name.

\*You can use default components, no need to style it too much.

## Testing The Project

1. It should be simple to run the project i.e with just `npm start`
2. Please add few unit tests

## Technology stack

The only requirment is to use React Native. Feel free to chose any other libreries or frameworks.

# Dev Comments

1. `npm start-server` starts development server. `npm start` starts android application
2. Statistics is calculated and stored in AsyncStorage using redux-persist.
   Since no spec was mentioned regarding cases with several of the names having the same
   "popularity" - no speciic handling of that is added (if needed, please specify), app just shows
   one of the most popular names
3. Several unit tests were added for most non-trivial parts of logic (to run just run `npm run test`)
   For React components both snapshot and logic tests were used. Coverage was collected ad can be found in ./coverage
