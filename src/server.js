const express = require('express');
const app = express();
const port = 1337;

app.use(express.static('src/pages'));

app.listen(port, () => {
    console.log('Сервер запущен на порту ' + port);
});