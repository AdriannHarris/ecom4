const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecomv2'
  ,});

    db.connect(err =>{
    if(err){
      console.log(err.message)
      return;
  }
  console.log("Connected to MySQL database")
});

app.get("/products", (req, res) => {
  const q = "SELECT * FROM ecom3";
  db.query(q, (err, data) => {
   if (err) {
    console.log(err);
    return res.json(err);
   }
   return res.json(data);
  });
 });

 app.get("/products", (req, res) => {
  const q = "SELECT * FROM ecom3 ORDER BY price ASC";
  db.query(q, (err, data) => {
   if (err) {
    console.log(err);
    return res.json(err);
   }
   return res.json(data);
  });
 });


app.listen(3000, () => {
 console.log("Connected to backend.");
});