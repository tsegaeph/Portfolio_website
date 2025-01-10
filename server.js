const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = process.env.PORT || 3000;

// Replace with your Telegram bot token and chat ID
const TELEGRAM_BOT_TOKEN = '8048902693:AAGv_onoqAQ3ckyzpkpIfx6XzH-DfvFXEmE';
const CHAT_ID = '1124986155';

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

bot.on('polling_error', (error) => {
    console.error('Polling error:', error.code, error.message);
});

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'static' folder
app.use('/static', express.static(path.join(__dirname, 'static')));

// Routes to serve HTML templates
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'index2.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'contact.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'about.html'));
});

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'skills.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'projects.html'));
});

app.get('/hobby', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'hobby.html'));
});

// Route to handle form submission
app.post('/send-feedback', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const telegramMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;

    bot.sendMessage(CHAT_ID, telegramMessage)
        .then(() => {
            res.status(200).send('Feedback sent successfully');
        })
        .catch(error => {
            console.error('Error sending message to Telegram:', error);
            res.status(500).send('Error sending message');
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});