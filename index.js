const express = require("express");
const app = express();
const {port = 8000} = process.env;

const routes = require("./routes");
const admin = require("./routes/admin");

// set body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.use( express.static( "public" ) );
app.set("view engine", "ejs");

app.get("/login", (req,res) =>{
  res.status(200).render('login');
});

const EMAIL = "admin@gmail.com";
const PASSWORD = "admin123";

app.post("/login/validate", (req,res)=>{
  if (req.body.email !== EMAIL || req.body.password !== PASSWORD)
  return res.status(401).json({
    status: "FAIL",
    message:"data not valid"
  });

  return res.redirect('/dashboard');
});

app.use("/", admin);
app.use("/api/", routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });