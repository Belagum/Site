const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, password, key } = req.body;

    const response = await fetch('https://keyauth.win/api/1.0/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            key: key,
            hwid: "none",
            appname: "your_app_name",
            ownerid: "your_owner_id",
            secret: "your_app_secret",
            version: "1.0"
        }),
    });

    const data = await response.json();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
