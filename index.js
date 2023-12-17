const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"))

app.get("/signup", async (req, res) => {
  res.render("signup.ejs");
});

app.get("/signin", async (req, res) => {
  res.render("signin.ejs");
});

app.listen(3000, () => console.log('Server running on port 3000'));
