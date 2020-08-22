var Telegram = require('node-telegram-bot-api')

var telegramToken = '1130098879:AAFZUte1_NwetoTVTcP4eJTx9oL-Ti7wDEo'
var answers = [
  'Жив, здоров, содержится в лагере1',
  'Жив, здоров, содержится в лагере2',
  'Жив, здоров, содержится в лагере3',
  'Жив, здоров, содержится в лагере4'
]

// с этого момента программа подключается к серверу telegram
// и начнет принимать данные и ждать от нас команд
var bot = new Telegram(telegramToken, {polling: true})

bot.on('message', function (msg) {
  console.log(msg)

  const reply = answers[parseInt(Math.random() * answers.length)]
  bot.sendMessage(msg.chat.id, reply)

  // if (msg.text.toLowerCase().indexOf('найди картинку') >= 0) {
  //   // bot.sendMessage(msg.chat.id, 'привет')
  // }
})
