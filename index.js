const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');

const botToken = '6398537713:AAGc5PMhhbEmsenmrXm0qN_qVzKw_ttBr4I'; // Bot token
const bot = new TelegramBot(botToken, { polling: true });
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    let attlog = req.body.data;
    attlog.cloud_id = req.body.cloud_id;
    attlog.type = req.body.type;
    console.log(attlog);

    const chatId = '986530860';
    const message = JSON.stringify(attlog);
    bot.sendMessage(chatId, message)
    .then(() => {
        console.log('Pesan berhasil dikirim ke bot Telegram');
    })
    .catch((error) => {
        console.error('Gagal mengirim pesan ke bot Telegram:', error);
    });
    
    res.send(JSON.stringify({"status": 200, "response": "successfully."}));
});
app.listen(process.env.PORT || 3000)
