const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
const apiUrl = 'https://api.jivosite.com/web/integration/webhook/265701/channel/4680784/log?locale=en&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjIwMjAxMjIxIn0.eyJpc3MiOiJqaXZvc2l0ZSIsImp0aSI6IjE4Mjk3MTIzOTY1MTM5MDc1NzM2NWJiNDM5NjI1OWIxMS43NjcwMzEyNSIsImF1ZCI6WyJhcGkiLCJqaXZvYXBwIiwiY2hhdHNlcnZlciJdLCJpYXQiOjE3MDY3NzEzNTAsImV4cCI6MTcwNjc3MzE1MCwic2NvcGVfbGlzdCI6WyJhdXRoIl0sInVzZXJfaWQiOjM4MjA4MCwidXNlcl9yb2xlIjoiYWdlbnRfb3duZXIiLCJzaXRlX2lkIjoyNjU3MDEsInN0YXJ0X3Rva2VuX2lkIjoiNzE4ODg1NDQzODcxMDY4MDE5MjY1YjcyYWRmZDQzNWUwLjYyODE4OTc0IiwicHJldl90b2tlbl9pZCI6IjI0ODkzMDU5MTg5Nzk5MTU1Mzk2NWJhZmU0MzBlNThmOS40NDg0OTM2MCJ9.EkHuJ_wYjPUYvbupc7Pqmk8__kOKTrAxUind0QTZ0eh3fvsCGqVtQ133idtkAVdM4gkvxVPu7RncCY-1nz4rnxMbRQvFNTmznx7-L4oGIrV_MfteFh46eiShIhL0YXhHskR-V9t8rICm05jsJ-ZfxdvcEDxHjZIaGYmMh17w_VGtx2qBFgfrw3xHtOa5t4z1x5LjfSriMc3vwNxEbFPtBQYGkbNjMRU8U9Lgvj31JfsJ8Wc0dhP-Wb0WYvUj3gLIyfoaldyvS9uZOZzUa78cIqQykyeQuZQ52kWICN2rD-FsEb8TMAN5WswrP7Mk4kjZAl2mBt4AZ4hG7ws3q9Sbrw';

fetch(apiUrl)
  .then(response => response.json())
  .then(visitor => console.log(visitor))
  .catch(error => console.error('Error:', error));

    res.send(JSON.stringify({"status": 200, "response": "successfully."}));
});
app.listen(process.env.PORT || 3000)
