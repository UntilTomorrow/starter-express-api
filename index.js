const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'demodb'
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
res.send('Yo!')
console.log(req.body)
   });
app.listen(process.env.PORT || 3000)
