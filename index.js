const express = require('express')
const app = express()
const PORT = 3000 

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events

app.get('/', (req, res) => { res.send('Hello World!') })

app.listen(PORT || process.env.PORT () => { console.log(Example app listening on port ${port}!) })

//start_here
const bot = new ViberBot({
	authToken: '4b066d234267dd8f-8c4488c87a546514-2f2d5d9dc4e94444',
	name: "EchoBot",
	avatar: "http://viber.com/avatar.jpg" // It is recommended to be 720x720, and no more than 100kb.
});

// Perfect! Now here's the key part:
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
	// Echo's back the message to the client. Your bot logic should sit here.
	response.send(message);
});
