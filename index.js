const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const attlogData = req.query.data;
    const cloudId = req.query.cloud_id;

    console.log('Data:', attlogData);
    console.log('Cloud ID:', cloudId);

    res.send(JSON.stringify({ "status": 200, "response": "Data received successfully." }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});
