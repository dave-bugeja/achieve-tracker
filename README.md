
# Steam Achievement Tracker

Steam Achievement Tracker is a responsive web app built using [ReactJS](https://reactjs.org/). It works in tandem with the [Steam Achievement Server](https://github.com/dave-bugeja/achieve-server), sending requests to the server endpoint then parsing and displaying the response from the server.

As this project was primarily intended as a learning experience with React, it's not ready to be used in any sort of commercial capacity. The project was developed with the idea of both front-end and back-end both being hosted on localhost. Only a core subset of UI functionality for mobile and desktop breakpoints was implemented.

## Installation

Use the node package manager [npm](https://www.npmjs.com/) to install Steam Achievement Tracker.

```bash
cd path\to\dir\achieve-tracker
npm install 
```

## Usage

### Creating the .env file
In order to start the web app, you will need to create an environment file (.env) in the root directory of the project. This file takes two parameters which are used to connect to the Steam Achievement Server:

SERVER_HOST_NAME = localhost

SERVER_HOST_PORT = *port_number*

Failure to include either of these parameters will result in all requests to the Steam Achievement Server failing.

### Starting the server
To start the server, run the following commands:

```bash
cd path\to\dir\achieve-server
npm start
```

### Accessing the Web App
Then, the web app UI should be automatically opened up in your system's default browser. If the web app does not open up for any reason, it can be accessed at the following URL:

[http://localhost:3006/](http://localhost:3006/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://github.com/dave-bugeja/achieve-tracker/blob/main/LICENCE)