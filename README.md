# Sample Expense Tracking App built with React Native

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://www.npmjs.com/package/axios) rest client.
- [native-base](https://docs.nativebase.io) as component library.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://www.npmjs.com/package/redux-persist) as persistance layer.
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) to dispatch asynchronous actions.
- [redux-thunk](https://www.npmjs.com/package/redux-logger) log redux actions in dev mode.
- [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) as key value storage system.
- [@react-native-community/netinfo](https://www.npmjs.com/package/@react-native-community/netinfo) as network info api
- [react-native-exception-handler](https://www.npmjs.com/package/react-native-exception-handler) as global error handler
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) as icon library
- [react-native-splash-screen](https://www.npmjs.com/package/react-native-splash-screen) to support native splash screen
- [react-native-calendars](https://www.npmjs.com/package/react-native-calendars) as calendar library

## Folder structure

This project follows a very simple folder structure:

- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common components.
    - `atoms`: contain all basic ui components.
    - `organism`: contain all combined ui elements.
    - `wrappers`: contain all common component wrappers.
  - `redux`: contain all redux specific code
    - `actions`: contain all actions, and expose the combined result using its `index.ts`
    - `reducers`: contain all reducers, and expose the combined result using its `index.ts`
    - `store`: state container which holds the application's state
  - `routes`: contain all the routes.
  - `screens`: contain all application screens.
    - `Screen`: screen specific folder.
      - `index.tsx`
  - `services`: contain all service calls.
  - `utils`: contain helper functions and constants.
  - `App.tsx`: Main component that starts whole app.
- `index.js`: Entry point of application as per React-Native standards.

## Running this app

Before running the app, make sure you run:

```sh
git clone https://github.com/isharadilshan/checklistpro.git

cd checklist

npm install --legacy-peer-deps or yarn install
```

some packages might not updated its peer react dependency. so use legacy command when installing packages with npm

### Running on iOS

Mac OS and Xcode are required.

```sh
cd ./checklistpro/ios && pod install
```

- Open `checklistpro/ios/checklist.xcworkspace` in Xcode
- Hit the Run button

### Running on Android

You'll need to have all the [prerequisites](https://github.com/facebook/react-native/tree/master/ReactAndroid#prerequisites) (SDK, NDK) for Building React Native installed.

```sh
cd ./checklistpro
npm run android
```

Open the checklist app in your emulator.

### Testing

Unit tests were written with Jest and Enzyme to test run below command

```sh
npm run test
```

UI tests were written with storybook to test run below command

```sh
npm run storybook
```

### CI / CD

For static code analysis used a sonarqube server hosted on seperate server [http://167.71.205.129:9000/dashboard?id=tracker-frontend]. request credentials when you need to access.

For deployments codepush and AppCenter platform used. [https://appcenter.ms]
