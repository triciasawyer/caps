# CAPS - Core Administrative Processing System

## Author: Tricia Sawyer

### Problem Domain

CAPS is a multi-phase project developed in Node.js that simulates a core administrative processing system. Each phase of this project refines and extends its functionality. Let's explore the objectives and user stories for each phase:
User stories:

#### Phase 1: Events

In the first phase, my goal is to set up a pool of events and handler functions for the CAPS system. The primary objective is to create a foundation for subsequent phases while maintaining the core functionality of package delivery.

User Stories:

- As a vendor, I want to alert the system when I have a package to be picked up.
- As a driver, I want to be notified when there is a package to be delivered.
- As a driver, I want to alert the system when I have picked up a package and it is in transit.
- As a driver, I want to alert the system when a package has been delivered.
- As a vendor, I want to be notified when my package has been delivered.

#### Phase 2: Socket.IO

In Phase 2, we transition from using Node events to using Socket.io for network communication. This transition allows clients to communicate over a network efficiently, simplifying broadcasting and enabling seamless interaction between servers and client applications.

Developer Story:
As a developer, I aim to create a network event-driven system using Socket.io to respond to events originating from both servers and client applications.

#### Phase 3: Queue

Phase 3 introduces features to manage deliveries made by CAPS Drivers. It simulates a delivery driver receiving a list of orders from a Queue and "scanning" package codes upon delivery. Retailers can monitor real-time delivery logs, and vendors receive "delivery" notifications even when disconnected from the dashboard.

User Stories:

- As a vendor, I want to "subscribe" to "delivered" notifications to stay informed about my package deliveries.
- As a vendor, I want to "catch up" on any "delivered" notifications I might have missed to access a complete log.
- As a driver, I want to "subscribe" to "pickup" notifications to know which packages to deliver.
- As a driver, I want to "catch up" on any "pickup" notifications I may have missed to ensure I deliver everything.
- As a driver, I want a way to "scan" a delivery so that vendors know when a package has been delivered.

### Links and Resources

- [GitHub Actions CI/CD](https://github.com/triciasawyer/caps/actions)
- [Socket.IO Emit Cheatsheet](https://socket.io/docs/v3/emit-cheatsheet/)

### Collaborators

- Worked with Daniel, Stephen, and Keelan on code and test issues in Remo.

### Setup

To understand how to this project works, follow these steps:

1. Open a total of four terminal windows or tabs.

2. Navigate to the Main directory

In the first terminal, navigate to the main directory of the project:
`cd caps`

3. Driver Client

In the second terminal, navigate to the driver client directory:

`cd clients/driver`

4. Flower Vendor Client

In the third terminal, navigate to the flower vendor client directory:

`cd clients/flower-vendor`

5. Widget Vendor Client

In the fourth terminal, navigate to the widget vendor client directory:

`cd clients/widget-vendor`

6. Run Nodemon

In each of the four terminals, run the nodemon command to start the respective parts of the project. You should now have one terminal for the main directory and one terminal each for the driver, flower vendor, and widget vendor clients, with each running its part of the project.

By following these steps, you can explore the functionality of the project and observe it in action. You should see something like this:

![caps process](./assets/caps-process.png)

### Tests

To run tests, after running `npm i`, run the command `npm test`

### Deployment

You can access the deployed version of this project at [Render deploy](https://caps-dev.onrender.com)

#### UML

![UML](./assets/lab11-UML.png)
![UML](./assets/lab12-UML.png)
![UML](./assets/lab13-UML.png)
