// console.log("script is running");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// middleware request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define the template engine
app.set("view engine", "perscholas");

//serve static files
app.use(express.static("styles"));

const customMiddleware = require("./middleware/custom");
const errorHandler = require("./middleware/errorHandler");

app.use(customMiddleware.logRequestDetails);

///routes
const postRoustes = require("./routes/posts");
const userRoustes = require("./routes/users");
app.use("./posts", postRoustes);
app.use("./users", userRoustes);
// Example route
app.get("/", (req, res) => {
    res.send("Be Happy!");
});
//error handling
app.use(errorHandler.handleErrors);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});