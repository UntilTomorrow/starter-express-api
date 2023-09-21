const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    let attlog = req.body.data;
    attlog.cloud_id = req.body.cloud_id
    let sql = "INSERT INTO log SET ?";
    let query = pool.query(sql, attlog, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "response": results}));
        });
    console.log(attlog);
    
    res.send(JSON.stringify({"status": 200, "response": "successfully."}));
});
app.listen(process.env.PORT || 3000)
