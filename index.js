var Telegram = require('node-telegram-bot-api')

var telegramToken = '1130098879:AAFZUte1_NwetoTVTcP4eJTx9oL-Ti7wDEo'
var answer = 'Жив, здоров, содержится в лагере.'

// с этого момента программа подключается к серверу telegram
// и начнет принимать данные и ждать от нас команд
var bot = new Telegram(telegramToken, {polling: true})

bot.on('message', function (msg) {
  console.log(msg)

  //const reply = answers[parseInt(Math.random() * answers.length)]
  
switch (parseInt(Math.random() * 4)) {
  case 0:
	  bot.sendMessage(msg.chat.id, answer);
	  bot.sendLocation(msg.chat.id, 55.656759, 37.334073);
	  break;
  case 1:
	  bot.sendMessage(msg.chat.id, answer);
	  bot.sendPhoto(msg.chat.id ,'door.jpg');
	  break;
  case 2:
	  bot.sendMessage(msg.chat.id, answer);
	  bot.sendPhoto(msg.chat.id ,'door2.jpg');
	  break;
  case 3:
	  bot.sendMessage(msg.chat.id, answer);
	  bot.sendPhoto(msg.chat.id ,'read.jpg');
	  break;
  default:
    console.log("Sorry, we are out of ");
}

  // if (msg.text.toLowerCase().indexOf('найди картинку') >= 0) {
  //   // bot.sendMessage(msg.chat.id, 'привет')
  // }
})
