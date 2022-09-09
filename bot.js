const TelegramBot=require('node-telegram-bot-api')

const token=""

const bot = new TelegramBot(token,{polling:true})
bot.on('message',(msg)=>{
  const chatId=msg.chat.id
  const firstName=msg.from.first_name
  const lastName=msg.from.last_name

  bot.sendMessage(chatId,`be welcome ${firstName} ${lastName}`)
  console.log(msg,chatId)
  return true
})
bot.on('message', (msg) => {
  var location = "location";
  if (msg.text.indexOf(location) === 0) {
      bot.sendLocation(msg.chat.id,-19.912998, -43.940933);
      bot.sendMessage(msg.chat.id, "Here is the point");

  }
});
bot.onText(/\/sendpic/, (msg) => {
  bot.sendPhoto(msg.chat.id,"https://infinitas-guerras.fandom.com/pt-br/wiki/Guts?file=68519967-guts-wallpapers.jpg",{caption : "Here we go ! \nThis is just a caption "} );
  });
