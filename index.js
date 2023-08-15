const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let attlog = req.body.data;
    attlog.cloud_id = req.body.cloud_id;
    
    console.log(attlog);
    
    res.send(JSON.stringify({"status": 200, "response": "Data received successfully."}));
});
app.listen(process.env.PORT || 3000)
