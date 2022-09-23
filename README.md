# Blurdle

A clone of wordle using React and Typescript.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
# Note about dates

You can spoof dates by adding a 'date' url param with dates in the YYYY_MM_DD format like this `?date=2022_09_27`

# TODOs

* Move consts from types file to constants.ts
* TODO fix order issue with multiple letters when some are correct (ex: guessing IIIII for IONIC)
* Add larger list of words
* Add dictionary/validation to make sure guesses are words before submitting
* Move word retrieving to API call, fetching solutions from server
* Add keyboard functionality and improve accessibility
* Move guess evaluation to server (solution only revealed to client-side when game is over)
* Improve modal (allow closing)
* Improve styling
* Add tests for components
* Add hard mode
* Add toggle for light/dark modes
* Add localStorage persistence
* Add user functionality
* Add history/stats
