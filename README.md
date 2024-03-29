# Blurdle

A clone of Wordle using React and Typescript. State management is done using React's context and reducer (using immer to simplify reducer logic). Styling is done via SCSS.

Word solutions list sourced from the public "Wordle" words list (should provide words into 2027), and the word list used for validating if words are valid English words was sourced from the Stanford GraphBase word list.

### Note about dates

You can spoof dates by adding a 'date' url param with dates in the YYYY_MM_DD format like this `?date=2022_09_27`

You can also pass `random` as the `date` param  like this `date=random` to get the solution from a random date (within the valid range).

### Hosted live on Netlify

[https://jesselee-blurdle.netlify.app/](https://jesselee-blurdle.netlify.app/)

## TODOs

* Move word retrieving to API call, fetching solutions from server
* Move guess evaluation to server (solution only revealed to client-side when game is over)
* Improve modal (allow closing)
* Improve styling
* Add tests for components
* Add hard mode
* Add toggle for light/dark modes
* Add localStorage persistence
* Add user functionality
* Add history/stats

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
