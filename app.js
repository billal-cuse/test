const express = require("express");
const ejs = require("ejs");
const path = require('path')
const bodyParser = require("body-parser");
const app = express();
const multer = require('multer')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
  res.send('billal')
})

console.log(process.env.billal)

app.listen(process.env.port, () => {
  console.log(`server running on http://192.168.0.1:8080`);
});
