const express = require("express");
const bodyParser = require("body-parser");
const loginController = require("./controllers/LoginController");
const partyController = require("./controllers/PartyController");
const app = express();
const port = 3000;
global.FAKE_DB = require("./fakedb");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.redirect("login");
});

// FORMULAIRE DE LOGIN
app.get("/login", (req, res) => {
  loginController.loginForm(req, res);
});

// LOGIN
app.post("/login", (req, res) => {
  loginController.login(req, res);
});

// FORMULAIRE DU REGISTER
app.get("/register", (req, res) => {
  loginController.registerForm(req, res);
});

// REGISTER
app.post("/register", (req, res) => {
  loginController.register(req, res);
});

// PAGE CREATION D'UNE PARTIE
app.get("/party", (req, res) => {
  if (partyController.createForm) {
    partyController.createForm(req, res);
  } else {
    res.send("Not implemented");
  }
});

// CREATION D'UNE PARTIE
app.post("/party/show", (req, res) => {
  if (partyController.show) {
    partyController.show(req, res);
  } else {
    res.send("Not implemented");
  }
});

// CREATION D'UNE PARTIE
app.post("/party/create", (req, res) => {
  if (partyController.create) {
    partyController.create(req, res);
  } else {
    res.send("Not implemented");
  }
});

// PAGE LISTE QUESTIONNAIRE
app.post("/party/list", (req, res) => {
  if (partyController.list) {
    partyController.list(req, res);
  } else {
    res.send("Not implemented");
  }
});

console.log("Registered routes : ");
for (let s of app._router.stack) {
  if (s.route) {
    console.log(Object.keys(s.route.methods).join(",") + " " + s.route.path);
  }
}

app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
});
