# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Used technologies
`React` and `React-Router-DOM` for creating frontend SPA.
`Node.js (Express)` for creating backend.
`Sequelize` as ORM for creating database and managing tables with `PostgreSQL` as RDBMS.

## Available Scripts

In the `frontend` directory, you can run:

### `npm install`

Installs all the dependencies for frontend.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

In the `backend` directory, you can run:

(Order is important!)

### `npm install`

Installs all the dependencies for backend.

### `npx sequelize-cli db:create`

Creates database for application.

### `npx sequelize-cli db:migrate`

Applies migration files which describe how to get to the new state and how to revert the changes in order to get back to the old state.

### `npm start`

Starts application and creates all tables.

### `npx sequelize-cli db:seed:all`

Applies seeder files which insert mock data to work with into database.
