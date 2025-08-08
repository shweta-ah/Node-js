const express = require("express");
const app = express();
// const users = "./MOCK_DATA.json";
const users = require("./MOCK_DATA.json");
const port = 8000;

// //through HTML doc
// app.get("/users", (req, res) => {
//   const html = `
//     <ul >${users.map((user) => `<li>${user.first_name}</li>`)}</ul>
//     `;
//   res.send(html);
// });

//routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});
//to get user id
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("./api/users", (req, res) => {
  //TODO: Create new User

  return res.json({ status: "pending" });
});

//listen on Port
app.listen(port, () => console.log("server is started"));
