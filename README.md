# React Fundamental
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run the Project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# React Concept
1. Create React App
2. NPM and YARN Basic command
3. Folder Structure


## Create react app

```
npx create-react-app monsters-rodex
cd monsters-rodex
npm start
```

## NPM and Yarn command
```
//Install dependencies from package.json: 
npm install == yarn

//Install a package and add to package.json: 
npm install package --save == yarn add package

//Install a devDependency to package.json: 
npm install package --save-dev == yarn add package --dev

//Remove a dependency from package.json: 
npm uninstall package --save == yarn remove package

//Upgrade a package to its latest version:
npm update --save == yarn upgrade

//Install a package globally: 
npm install package -g == yarn global add package
```

## Folder Structure

```
├── README.md  -- Instruction or Important details of your Project
├── package.json -- dependent package requires to run & build project
├── tsconfig.json
├── public/ --Application after the build  
└── src/ -- Application source Code
    ├── index.js -- SPA starting page
    └── components/
        └── common/
```

