const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // Mengambil data dari parameter querystring 'data' dan 'cloud_id'
    const attlogData = req.query.data;
    const cloudId = req.query.cloud_id;

    // Pisahkan tanggal dan waktu dari data 'scan'
    const scanDateTime = attlogData.scan.split(' ');
    const scanDate = scanDateTime[0];
    const scanTime = scanDateTime[1];

    // Membuat objek baru dengan data yang telah dipisahkan
    const attlog = {
        pin: attlogData.pin,
        date: scanDate,
        time: scanTime,
        verify: attlogData.verify,
        status_scan: attlogData.status_scan,
        cloud_id: cloudId,
    };

    // Cetak data yang telah dipisahkan ke konsol
    console.log(attlog);

    res.send(JSON.stringify({ "status": 200, "response": "successfully." }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
