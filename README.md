# React Native Project to demo basic CRUD functionalities for ToDo application

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://www.npmjs.com/package/axios) rest client.
- [prop-types](https://github.com/facebook/prop-types) to prop type-check.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://www.npmjs.com/package/redux-persist) as persistance layer.
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) to dispatch asynchronous actions.
- [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) as key value storage system.
- [@react-native-community/netinfo](https://www.npmjs.com/package/@react-native-community/netinfo) as network info api
- [react-native-exception-handler](https://www.npmjs.com/package/react-native-exception-handler) as global error handler

## Folder structure

This project follows a very simple folder structure:

- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common components.
    - `atoms`: contain all basic ui components.
    - `organism`: contain all combined ui elements.
    - `wrappers`: contain all common component wrappers.
  - `redux`: contain all redux specific code
    - `actions`: contain all actions, and expose the combined result using its `index.js`
    - `reducers`: contain all reducers, and expose the combined result using its `index.js`
    - `store`: state container which holds the application's state
  - `routes`: contain all the routes.
  - `screens`: contain all application screens.
    - `Screen`: screen specific folder.
      - `index.js`
  - `services`: contain all service calls.
  - `utils`: contain helper functions and constants.
  - `App.js`: Main component that starts whole app.
- `index.js`: Entry point of application as per React-Native standards.

## Running this app

Before running the app, make sure you run:

```sh
git clone https://github.com/isharadilshan/checklist.git
cd checklist
npm install or yarn install
```

### Running on iOS

Mac OS and Xcode are required.

```sh
cd ./checklist/ios && pod install
```

- Open `checklist/ios/checklist.xcworkspace` in Xcode
- Hit the Run button

### Running on Android

You'll need to have all the [prerequisites](https://github.com/facebook/react-native/tree/master/ReactAndroid#prerequisites) (SDK, NDK) for Building React Native installed.

```sh
cd ./checklist
react-native run-android
```

Open the checklist app in your emulator.
