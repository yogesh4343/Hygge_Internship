


⭐️ This is a Project Link ==> https://hygge-internship.vercel.app/

# Sample web repository
## _Code architecture followed by Yogesh Project._

https://hygge-internship.vercel.app/

 ✨ This repository showing that how we are using clean code architecture, folder structure, and component reusability.✨

## Features

- _**Functionality**_  : Work correctly, efficiently, and robustly.
- _**Readability**_    : The primary audience for our code is other developers.
-  _**Extensibility**_ : Well-designed code should be extensible as a building                           block for solving new problems.
- _**Scalability**_    : The code that can scale along with the need of your                            business.

## Tech

- [React](https://reactjs.org/) - HTML enhanced for web apps!
- [TailWind Css] - Tailwind CSS is the greatest CSS framework for the Developers.

## Installation

Requires [Node.js](https://nodejs.org/)  to run.

Install the dependencies and devDependencies and start the server.

```sh
cd sample-web
npm i or npm install
node start
```

### Package manager - Npm
This project is using Npm as package manager, if you do not have this installed on your machine please start by looking at the [Npm docuentation and tutorials]([https://classic.yarnpkg.com/en/docs](https://docs.npmjs.com/)). After installing the package manager the following commands will be availible for you:
- `npm install` - Installing dev dependencies unless `mode=production`
- `npm start` - Starting the project
- `npm run build` - Building the source files

If you seem to still have issues with these commands, try running `yarn cache clean` and do `yarn install`

## Archirecture and Project structure

This project follows the `Clean Architecture`, and hence have focused the structuring of the project on the standard practices that are recommended by the `Clean Architecture`. You will find we have focused on `de-coupling` and `reusability` of the code


This project is structured in the following way:


```
├── .git
├── .gitignore
├── package.json
├── tailwind.config.js
├── public
|  └── index.html
|  ├── Images
|  |  └──icon.png
├── README.md
├── src
| └── App.css
| └── App.js
| └── index.css
| └── index.js
|  ├── App.css
|  ├── Assests
|  |  └── ArrowButton.jsx
|  |  └── Button.jsx
|  |  └── Heading.jsx
|  |  └── LogoImg.jsx
|  |  └── LogoName.jsx
|  |  └── NavLinks.jsx
|  |  └── Quiz.jsx
|  |  └── Toggle.jsx
|  ├── Components
|  |  └── CreateFlashCard.jsx
|  |  └── FAQ.jsx
|  |  └── FlashCard.jsx
|  |  └── HomeContainer.jsx
|  |  └── Mathematics.jsx
|  |  └── NavBar.jsx
|  |  └── QuestionBox.jsx
|  |  └── RelationFunction.jsx
|  ├── JSON
|  |  └── Ques.json
|  |  └── Toggle.json


     [File structure is recursive]
```


**pages** - There is a index.js file where we have already defined the route component. Now when you create a new page you have to add the route in the routes group. 

## How should a Page component look
A React component will look the same if it is a "Page" or just a heading somewhere, the only difference there is placement of it. These rules or guidelines should therefore be followed regardless to make it easier for new developers to join the project. 


**Components** - Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. They are sometimes called "presentational components" and the main concern is how things look. If any other components need to use the component placed here, then it should be moved to the common `Components` folder.


## License

** Personal Project **





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
