const app = require("./app.js");
let connectDatabase = require("./config/DBconfig.js");
require("dotenv").config();

const Port = process.env.PORT || 4000;


/* This code is starting the server and listening on a specified port (either the port specified in the
    environment variable `PORT` or port 8080 if `PORT` is not defined). When the server starts, it first
    waits for the database connection to be established (using the `await` keyword with the
    `dbConnection` promise), and then logs a message to the console indicating that the server is
    listening on the specified port. If there is an error while starting the server, it logs an error
    message to the console. */
app.listen(Port, async () => {
    try {
        await connectDatabase();

        console.log(`listening on http://localhost:${Port}/`);
    } catch (error) {
        console.log("app.listen  error:", error);

        console.log(`error while listening on ${Port}`);
    }
});

/* for testing api response . */
// app.get("/", async (req, res) => {
//     try {
//         res.status(200).json({ message: "Hello, wellcome! to my site" });
//     } catch (error) {
//         console.log("app.get  error:", error);
//         res.status(500).json({ message: error.message });
//     }
// });

/* `app.all("*", (req, res) => {...})` is a middleware function that handles all requests that do not
match any of the defined routes. It logs a message to the console indicating that the requested
route is not found and sends a 404 status code with a message "REQUESTED ROUTE ARE NOT FOUND" to the
client. This is useful for handling invalid requests and preventing the server from crashing. */
// app.all("*", (req, res) => {
//     console.log("REQUESTED ROUTE ARE NOT FOUND");
//     res.status(404).send("REQUESTED ROUTE ARE NOT FOUND");
// });

// Uncaught Exception Error
process.on('uncaughtException', (err) => {
    console.log(`Error:${err.message}`);
    process.exit(1);
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error:${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});