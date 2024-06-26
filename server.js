const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Это для раздачи статических файлов

app.post('/register', async (req, res) => {
    const { username, password, licenseKey } = req.body;
    const hwid = ''; // Укажите HWID, если требуется

    try {
        const response = await fetch('https://keyauth.win/api/1.0/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                license: licenseKey,
                hwid
            })
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
