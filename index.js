const express = require("express");
const app = express();
const geoip = require("geoip-lite");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const ipAddress = req.ip;
  const geo = geoip.lookup(ipAddress);

  if (geo && geo.ll) {
    const latitude = geo.ll[0];
    const longitude = geo.ll[1];
    res.send(
      JSON.stringify({
        status: 200,
        response: "successfully.",
        latitude: latitude,
        longitude: longitude,
      })
    );
  } else {
    res.send(
      JSON.stringify({ status: 400, response: "Failed to retrieve location." })
    );
  }
});

app.listen(process.env.PORT || 3000);
