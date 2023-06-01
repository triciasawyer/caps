# LAB - 11-12

## Author: Tricia Sawyer

### Problem Domain

CAPS

- Events((PR:class-01)lab 11)
This is the first of a 4-Phase build of the CAPS system, written in Node.js. In this first phase, our goal is to setup a pool of events and handler functions, with the intent being to refactor parts of the system throughout the week, but keep the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

User stories:
As a vendor, I want to alert the system when I have a package to be picked up.
As a driver, I want to be notified when there is a package to be delivered.
As a driver, I want to alert the system when I have picked up a package and it is in transit.
As a driver, I want to alert the system when a package has been delivered.
As a vendor, I want to be notified when my package has been delivered.

- Socket.IO(PR 2, lab 12)
In Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called Socket.io so that clients can communicate over a network. Socket.io manages the connection pool for us, making broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

Developer story changes:
As a developer, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and client applications.

### Links and Resources

- [GitHub Actions ci/cd]

### Collaborators

- Code review in lecture using Reece's code
- Worked in Remo with Daniel and Stephen on code and test issues

### Setup

.env requirements (where applicable)
for now I have none and do not require one

How to initialize/run your application (where applicable)
e.g. npm start

#### Tests

to run tests, after running `npm i`, run the command `npm test`

#### Deployed version

[Render deploy](https://caps-dev.onrender.com)

#### UML

![UML](./assets/lab11-UML.png)
![UML](./assets/)