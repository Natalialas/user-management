# User Management Table

A React application for managing and displaying user data fetched from a mock API. The app supports advanced filtering by name, username, email, and phone. The project utilizes Redux for state management and TypeScript for ensuring type safety.

## Features

- **User Management Table**: Displays user data (name, username, email, phone) fetched from a mock API.
- **Advanced Filtering**: Search and filter users by name, username, email, or phone with real-time updates.
- **State Management**: Utilizes Redux for managing user data and filter states.
- **Type Safety**: Entire project is written in TypeScript for static typing and better developer experience.

## Demo

[[(link here)](https://user-management-puce-five.vercel.app/)]

## Technologies Used

- **React**: Library for building user interfaces.
- **Redux**: State management library.
- **TypeScript**: Strongly typed superset of JavaScript.
- **SCSS**: CSS preprocessor for styling.
- **JSONPlaceholder**: Mock API service used to fetch user data.

## Installation and Setup

To run the application locally, follow these steps:

### 1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo-link.git
    cd your-repo-directory
    ```

### 2. Install the dependencies:
    ```bash
    npm install
    ```

### 3. Start the development server:
    ```bash
    npm start
    ```
   The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. The table will display user information such as name, username, email, and phone.
3. Use the filter inputs to search users by name, username, email, or phone.
4. The table will automatically update to show the filtered results.

## Project Structure

- **src/components**: Contains the React components such as `UserFilter`, `UserTable`, and `UserRow`.
- **src/redux**: Contains Redux-related code including actions, reducers, and store configuration.
- **src/types**: Contains TypeScript interfaces and types for better type management.
- **src/styles**: SCSS stylesheets for styling the application.

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner in interactive watch mode.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm run eject`**: Ejects the app from `react-scripts` for advanced customization.

## Future Improvements

- Add tests for components and Redux logic.
- Improve UI/UX for better user experience.

## License

This project is licensed under the MIT License.
