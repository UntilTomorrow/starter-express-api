const express = require('express');
const app = express();

app.get('/', (req, res) => {
console.log(req.body)
   });
app.listen(process.env.PORT || 3000)
