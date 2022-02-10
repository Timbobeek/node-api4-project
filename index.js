require("dotenv").config();
const express = require("express");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h1>Lessssgoooooooo</h1>`);
});

const users = [
  { id: 1, username: "Timmy" },
  { id: 2, username: "Marcel" },
  { id: 3, username: "Capybara" },
  { id: 4, username: "Allison" },
  { id: 5, username: "Oscar" },
];

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

server.post("/api/register", (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        message: "Provide password AND username!",
      });
    }
    const newUser = { id: users.length + 1, username: username };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({
      message: "Cannot register, try again later",
    });
  }
});

server.post("/api/login", (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        message: "Provide password AND username!",
      });
    }

    const foundUsers = users.filter((u) => u.username === username);
    if (foundUsers.length > 0) {
      res.status(200).json(foundUsers[0]);
    } else {
      res.status(403).json({ message: "No such user" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Cannot register, try again later",
    });
  }
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 7777;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
