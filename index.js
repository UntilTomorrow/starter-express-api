const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    let getdata = req.body.data;
    getdata.cloud_id = req.body.cloud_id;
    getdata.type = req.body.type;
    getdata.trans_id = req.body.trans_id;
    console.log(getdata);
    res.send(JSON.stringify({"status": 200, "response": "successfully."}));
});
app.listen(process.env.PORT || 3000)
