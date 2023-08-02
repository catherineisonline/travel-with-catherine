import express, { json } from 'express';
import fetch from 'node-fetch';


const app = express();
const port = 3000; // Choose a port for your server

app.use(json());

app.post('/verify-recaptcha', async (req, res) => {
    const { token } = req.body;
    const secret = '6Le3vXEnAAAAADa7ADYUlC9yEcuritqWD1LjFa3d'; // Replace with your reCAPTCHA secret key

    try {

        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            body: JSON.stringify({
                secret,
                response: token,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
