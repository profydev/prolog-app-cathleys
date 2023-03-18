## How I worked on this project

My goal is to simulate professional work environment.

*I built this app based on Figma design:[Screenshot of designs](docs/figma.JPG)
*I worked on the tasks based on kanban board:[Screenshot of tasks](docs/kanban.png)
\*I used feature branches and Pull Requests: [Example PR](https://github.com/profydev/prolog-app-cathleys/pull/12)

## How to navigate this project

*Somewhat complex application logic: [Example code](https://github.com/profydev/prolog-app-cathleys/pull/45/files#diff-521a7275a4eb3fdf5e1b8eeb2344d4d1bc0226821a14bfa32f2987ced05900b6)and[its PR](https://github.com/profydev/prolog-app-cathleys/pull/45)
*Responsive CSS using styled components: [view PR](https://github.com/profydev/prolog-app-cathleys/pull/53)and this [Example code](https://github.com/profydev/prolog-app-cathleys/pull/53/commits/e70082bfcdb381ad2d82122b42685c55426c7636)
*This app fetches data from Prolog API: [Example data request](docs/data-request.png)and [data transformation](https://github.com/profydev/prolog-app-cathleys/pull/44/files#diff-1fb743f14b9931a06d480ac25d22a3c7e7eb83bce1832bb0b11759db4ed8c98c)
*Integration test : [Example test](docs/cypress-test.jpg)
\*Recieves code reviews from a senior developer: [Example PR](https://github.com/profydev/prolog-app-cathleys/pull/44)

## Why I built the project this way

In a nutshell, the tech stack used in this app are widely supported by majority of users according to this [article](https://profy.dev/article/react-tech-stack).

Storybook is a great tool to isolate particular react component to test its different states and UI design. Needless to say, it helps me to focus on documenting the component.

styled components benefits are, first it's a react-specific CSS-in-JS styling solution that helps me to design with a custom css style. It also supports the theming of this app.

Typescript helps to check javascript. This allows me to reduce bugs and errors in the code and make sure that the values are type safe.

Testing is essential part of app development. Cypress is a beginner and user-friendly with a great UI which helps me to test the Prolog app easily.

I'm focused on Frontend/ React development since it's something I'm interested in for now.

Whenever I get stuck on a certain task, I usually reach out for help to essentially solve the problem and learn from their experience. I think I need to mention this since I'm a human and actively learning. I can't improve this app without their existence.

## If I had more time I would change this

*Separate files according to its usage as there are some files that living in the same file.
*Refactor some of the code: Especially this [part](https://github.com/profydev/prolog-app-cathleys/pull/35/files)
\*Add end-to-end tests if I know and have time to.

## The Application

The application is an error logging and monitoring tool similar to Sentry or Rollbar. Note: you have to click the "Dashboard" link in the upper right corner to see the app as shown in the screenshot below.

![The running application](docs/app.png)

## Getting Started

This project is built with Next.js, TypeScript, Cypress & styled-components among others. To start working on the project, first clone the repository and install the dependencies.

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Now you can open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Tests

This project is covered with Cypress tests. Although most tests for production apps are currently written with React Testing Library, Cypress is the best option to get started with testing. When you're new to testing the start can be very cumbersome and feel like you're in a completely new dev environment.

Cypress makes it much easier to get started with testing.

To run the Cypress tests on your local machine use this command:

```bash
npm run cypress
```

## Storybook

Storybook is a great tool to document your components and visually test them in isolation. To open Storybook run

```bash
npm run storybook
```
