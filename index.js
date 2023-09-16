const express = require("express");
const ejs = require("ejs");
const path = require('path')
const bodyParser = require("body-parser");
const app = express();
const multer = require('multer')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


const upload = multer({
    dest:'./uploads/'
})


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'));
});


app.post("/", upload.single("avatar") , (req, res) => {
    const {name, email, roll} = req.body
    console.log(name,email,roll)
  res.sendFile(path.join(__dirname,'./index.html'));

});

app.listen(8080, "192.168.0.1", () => {
  console.log(`server running on http://192.168.0.1:8080`);
});
