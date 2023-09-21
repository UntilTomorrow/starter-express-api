const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    let attlog = req.body.data;
    attlog.cloud_id = req.body.cloud_id;
    
    console.log(attlog);
    
    res.send(JSON.stringify({"status": done, "response": "successfully."}));
});
app.listen(process.env.PORT || 3000)
