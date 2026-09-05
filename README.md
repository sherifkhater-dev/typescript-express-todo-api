# Todo REST API

A simple Todo REST API built with **Node.js, Express, and TypeScript** using in-memory data storage.

## Features

* Get all todos
* Add a new todo
* Update a todo
* Delete a todo
* TypeScript interfaces and type safety

## Technologies

* Node.js
* Express.js
* TypeScript

## API Endpoints

| Method | Endpoint              | Description    |
| ------ | --------------------- | -------------- |
| GET    | `/todos/`             | Get all todos  |
| POST   | `/todos/todo`         | Add a new todo |
| PUT    | `/todos/todo/:todoId` | Update a todo  |
| DELETE | `/todos/todo/:todoId` | Delete a todo  |

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Run the Server

Start the server using:

```bash
npm start
```

The server will run on:

```text
http://localhost:5000
```

## Note

This project uses **in-memory storage**, so all todos are lost when the server is restarted.

This project was created for learning and practicing **Express.js and TypeScript**.
