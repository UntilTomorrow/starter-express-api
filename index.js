const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const attlogData = req.body.scan;
    const cloudId = req.body.cloud_id;

    const [date, time] = attlogData.split(' ');

    console.log('Tanggal:', date);
    console.log('Waktu:', time);

    res.send(JSON.stringify({ "status": 200, "response": "Data received successfully." }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
