const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/', (req, res) => {
    const ipAddress = req.ip;
    // Lakukan sesuatu dengan alamat IP, misalnya menentukan lokasinya
    // Misalnya, Anda bisa menggunakan layanan geolokasi pihak ketiga untuk menentukan lokasi dari alamat IP

    res.send(JSON.stringify({"status": 200, "response": "successfully.", "ip": ipAddress}));
});

app.listen(process.env.PORT || 3000);
