const express = require("express");
const server = express();
const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(express.json());

// Custom authentication API endpoint
server.post("/api/authenticate", (req, res) => {
  // const { username, password } = req.body;

  // Retrieve the users from the JSON server's database
  const users = router.db.get("users").value();

  // Find the user with the provided username and password
  const authenticatedUser = users.find(
    (user) => user.name === req.body.user && user.pass === req.body.pass
  );

  for (let i = 0; i < users.length; i++) {
    console.log(i, ": ", users[i].pass);
  }

  console.log("y? :", authenticatedUser);

  if (authenticatedUser) {
    console.log("Success!");
    // User authentication successful
    res.json({
      token: "Token",
      success: true,
      message: "Authentication successful",
    });
  } else {
    console.log("Fail!");
    // User authentication failed
    res.status(401).json({
      success: false,
      message: "Invalid username or password",
    });
  }
});

// Mount the JSON server router
server.use("/api", router);

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
