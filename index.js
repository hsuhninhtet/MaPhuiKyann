const ViberBot  = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const winston = require('winston');
const wcf = require('winston-console-formatter');
var request = require('request');


const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [    
    //new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.Console()
  ]
});

// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    authToken: process.env.AUTH_TOKEN, // <--- Paste your token here
    name: "Ma Phyi Kyan",  // <--- Your bot name here
    avatar: "https://static.wixstatic.com/media/3b1a9f_3bcff27db73641ecbe1b435dcf4a0635~mv2.png" // It is recommended to be 720x720, and no more than 100kb.
 });

if (process.env.NOW_URL || process.env.HEROKU_URL) {
    const http = require('http');
    const port = process.env.PORT || 8080;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL));
} else {
    logger.debug('Could not find the now.sh/Heroku environment variables. Please make sure you followed readme guide.');
}


bot.onSubscribe(response => {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if a web site is down for everyone or just you. Just send me a name of a website and I'll do the rest!`);
});


bot.onTextMessage(/^hi|hello$/i, (message, response) =>{
	response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am robot`))
});

bot.onTextMessage(/mingalarpar/i, (message, response) =>{
	const SAMPLE_RICH_MEDIA = {
		"ButtonsGroupColumns": 6,
		"ButtonsGroupRows": 7,
		"BgColor": "#FFFFFF",
		"Buttons": [
			{
			   "Columns":6,
			   "Rows":3,
			   "ActionType":"open-url",
			   "ActionBody":"https://www.google.com",
			   "Image":"https://techcrunch.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-5.28.28-PM.png?w=730&crop=1"
			},
			{
			   "Columns":6,
			   "Rows":2,
			   "Text":"<font color=#323232><b>မင်္ဂလာပါရှင်။ မဖီးကြမ်းမှ ကြိုဆိုပါတယ်။ လူကြီးမင်းတို့ အလိုရှိရာ ငှက်ပျောသီးများကို ဝယ်ယူရရှိနိုင်ပါတယ်၊ ပစ္စည်းအရည်အသွေးကောင်းမွန်မှုနှင့် လူကြီးမင်းတို့စိတ်တိုင်းကျဝယ်ယူရရှိနိုင်ရေးသည် မဖီးကြမ်းလေးအတွက် ပထမဖြစ်ပါသည်။ organic ပစ္စည်းများဖြစ်ပါတယ်ရှင့်။</b></font><font color=#777777><br>Sound Intone </font><font color=#6fc133>$17.99</font>",
			   "ActionType":"open-url",
			   "ActionBody":"https://www.google.com",
			   "TextSize":"medium",
			   "TextVAlign":"middle",
			   "TextHAlign":"left"
			},
			{
			   "Columns":6,
			   "Rows":1,
			   "ActionType":"reply",
			   "ActionBody":"https://www.google.com",
			   "Text":"<font color=#ffffff>Buy</font>",
			   "TextSize":"large",
			   "TextVAlign":"middle",
			   "TextHAlign":"middle",
			   "Image":"https://s14.postimg.org/4mmt4rw1t/Button.png"
			},
			{
			   "Columns":6,
			   "Rows":1,
			   "ActionType":"reply",
			   "ActionBody":"https://www.google.com",
			   "Text":"<font color=#8367db>MORE DETAILS</font>",
			   "TextSize":"small",
			   "TextVAlign":"middle",
			   "TextHAlign":"middle"
			},
			{
			   "Columns":6,
			   "Rows":3,
			   "ActionType":"open-url",
			   "ActionBody":"https://www.google.com",
			   "Image":"https://techcrunch.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-06-at-5.28.28-PM.png?w=730&crop=1"
			},
			{
			   "Columns":6,
			   "Rows":2,
			   "Text":"<font color=#323232><b>Hanes Men's Humor Graphic T-Shirt</b></font><font color=#777777><br>Hanes</font><font color=#6fc133>$10.99</font>",
			   "ActionType":"open-url",
			   "ActionBody":"https://www.google.com",
			   "TextSize":"medium",
			   "TextVAlign":"middle",
			   "TextHAlign":"left"
			},
			{
			   "Columns":6,
			   "Rows":1,
			   "ActionType":"reply",
			   "ActionBody":"https://www.google.com",
			   "Text":"<font color=#ffffff>Buy</font>",
			   "TextSize":"large",
			   "TextVAlign":"middle",
			   "TextHAlign":"middle",
			   "Image":"https://s14.postimg.org/4mmt4rw1t/Button.png"
			},
			{
			   "Columns":6,
			   "Rows":1,
			   "ActionType":"reply",
			   "ActionBody":"https://www.google.com",
			   "Text":"<font color=#8367db>MORE DETAILS</font>",
			   "TextSize":"small",
			   "TextVAlign":"middle",
			   "TextHAlign":"middle"
			}
		 ]
	};
	 
	
	response.send(new RichMediaMessage(SAMPLE_RICH_MEDIA));
});

	




bot.onTextMessage(/./, (message, response) => {
    const text = message.text.toLowerCase();
    
    switch(text){        
        case "add":
            //do something
            break;
        default:
           //default
                
            
    }
});



