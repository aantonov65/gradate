# Introduction
React application that serves as a daily tasks app with support for user authentication using Firebase. Users can create, delete, filter, sort, and update the status of their tasks (pending/completed). The app was bootstrapped with [create-react-app](https://create-react-app.dev/)

## Features
+ User authentication with Firebase
+ Create new tasks with a title, priority, and category
+ Delete tasks
+ Filter tasks by categories
+ Sort tasks by priority
+ Update task status from pending to completed

## Prerequisites
1. Clone this repository to your local machine: ```git clone https://github.com/aantonov65/gradate.git```
2. Navigate to the project directory: ```cd gradate```
3. Install the dependencies: ```npm install```
4. Create a Firebase project and enable Firestore. Make sure to obtain the Firebase configuration object (apiKey, authDomain, projectId, etc.)
5. Create a .env file in the project's root directory and add the following variables:
+ ```REACT_APP_FIREBASE_KEY```=YOUR_FIREBASE_API_KEY
+ ```REACT_APP_AUTH_DOMAIN```=YOUR_FIREBASE_AUTH_DOMAIN
+ ```REACT_APP_DATABASE_URL```=YOUR_FIREBASE_DATABASE_URL
+ ```REACT_APP_PROJECT_ID```=YOUR_FIREBASE_PROJECT_ID
+ ```REACT_APP_STORAGE_BUCKET```=YOUR_FIREBASE_STORAGE_BUCKET
+ ```REACT_APP__MESSAGING_SENDER_ID```=YOUR_FIREBASE_MESSAGING_SENDER_ID
+ ```REACT_APP_APP_ID```=YOUR_FIREBASE_APP_ID
+ ```REACT_APP_MEASUREMENT_ID```=YOUR_FIREBASE_MEASUREMENT_ID```

Replace ```YOUR_FIREBASE_API_KEY, YOUR_FIREBASE_AUTH_DOMAIN, etc.```, with the respective values from your Firebase project.

## Usage
+ Start the development server: ```npm start```

## Built with
+ React
+ Firebase



