# LAB - 11-12

## Author: Tricia Sawyer

### Problem Domain

CAPS

- Events(PR 1, lab 11)
This is the first of a 4-Phase build of the CAPS system, written in Node.js. In this first phase, our goal is to setup a pool of events and handler functions, with the intent being to refactor parts of the system throughout the week, but keep the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

User stories:
As a vendor, I want to alert the system when I have a package to be picked up.
As a driver, I want to be notified when there is a package to be delivered.
As a driver, I want to alert the system when I have picked up a package and it is in transit.
As a driver, I want to alert the system when a package has been delivered.
As a vendor, I want to be notified when my package has been delivered.

- Socket.IO(PR 2, lab 12)

### Links and Resources

- [GitHub Actions ci/cd]
- [back-end dev server url]

### Collaborators

- Code review in lecture using Reece's code

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

![UML]()
