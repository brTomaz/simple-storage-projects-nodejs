<h1 align="center">
    <img alt="Projects Manager" src="./assets/project-img.png" width="200px" />
</h1>

<h3 align="center">
  Simple application using NodeJS concepts for storage projects and their tasks.
</h3>

<p align="center">
  <a href="https://github.com/brTomaz">
    <img alt="Made by brTomaz" src="https://img.shields.io/badge/made%20by-brTomaz-%2304D361">
  </a>
</p>


<p align="center">
  <a href="#fu-explanation">Explanation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-installation">Installation</a>
</p>

## :clipboard: Explanation

This work aims to manage projects and their tasks using [NodeJS](https://nodejs.org/en/) and storage in [PostgreSQL](https://www.postgresql.org/).


### Routes

- `GET /projects`: Route thats list all projects in the repository.

- `POST /projects`: The route must receive `id` and `title` in the request body and register a new project in the following format: `{ id: "1", title: 'New Project', tasks: [] }`.

- `PUT /projects/:id`: The project with `id` present in route parameters must be updated with the new title present in the request body.

- `DELETE /projects/:id`: The project with `id` present in route parameters must be deleted.

- `POST /projects/:id/tasks`: This route must receive a `title` and an`id` to store a new task in the array of tasks for a specific project.


## :rocket: Technologies

- [Yarn](https://classic.yarnpkg.com/en/) as a package manager.
- [PostgreSQL](https://www.postgresql.org/) to data storage.
- [Knex](http://knexjs.org/) as a query builder.
- [Celebrate](https://www.npmjs.com/package/celebrate) to validates requests.
- [Express](https://expressjs.com/) for routing.

## :wrench: Installation

- Install and run PostgreSQL Server;
- Create database with the same structure as the project and connect it;
- Run `yarn install`;
- Run `knex migrate:make create_projects`;
- Run `knex migrate:latest`;
- Run `yarn start`.
---
