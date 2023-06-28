# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Features

In the project website, you can use these widgets :

1. Calendar widget
2. Clock widget
3. Reminder widget
4. Timer widget

There is new widget has been implemented.

### `Progress Tracker Widget`

1. State Initialization:
   - `taskListData`: Represents the list of tasks. It is initialized as an empty array using the `useState` hook.

2. Event Handlers:
   - `handleTaskCompletion`: This function handles the completion of a task. It sets the `completed` property of the corresponding task in the `taskListData` array to `true`.

   - `isTaskCompleted`: This function checks if a task at a given index is completed by accessing the `completed` property of the task in the `taskListData` array.

   - `calculateProgress`: This function calculates the overall progress by filtering the `taskListData` array to get the completed tasks and dividing it by the total number of tasks.

   - `handleDeleteTask`: This function handles the deletion of a task. It uses the `splice` method to remove the task from the `taskListData` array.

3. Render:
   - The `render` method displays the progress information, the task list, and a button to add a new task.
   - The progress information includes the progress percentage, the number of completed tasks, and the total number of tasks.
   - The task list is rendered using the `map` function on the `taskListData` array. It displays each task with an input field, a "Completed" button, and a "Delete" button.
   - The input field allows users to edit the task title. Pressing the Enter key creates a new empty task and appends it to the `taskListData` array.
   - The "Completed" button triggers the `handleTaskCompletion` function to mark the task as completed. It is disabled if the task is already completed.
   - The "Delete" button triggers the `handleDeleteTask` function to remove the task from the `taskListData` array.

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
