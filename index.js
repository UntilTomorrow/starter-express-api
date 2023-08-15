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
        let attlog  = req.body.data
        attlog.cloud_id = req.body.cloud_id
        let sql = "INSERT INTO log SET ?";
        let query = conn.query(sql, attlog, (err, results) => {
          if(err) throw err;
          res.send('Yo!')
        });
        console.log(attlog)
   });
app.listen(process.env.PORT || 3000)
