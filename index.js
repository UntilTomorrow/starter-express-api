const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // Mengambil data dari parameter querystring 'data' dan 'cloud_id'
    const attlogData = req.query.data;
    const cloudId = req.query.cloud_id;

    // Memisahkan tanggal dan waktu dari data 'scan'
    const [date, time] = attlogData.scan.split(' ');

    // Membuat objek baru dengan data yang telah dipisahkan
    const attlog = {
        pin: attlogData.pin,
        date,
        time,
        verify: attlogData.verify,
        status_scan: attlogData.status_scan,
        cloud_id: cloudId,
    };

    // Cetak data yang telah dipisahkan ke konsol
    console.log(attlog);

    res.send(JSON.stringify({ "status": 200, "response": "Data received successfully." }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
