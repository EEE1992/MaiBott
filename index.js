// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const token = process.env['bot-token']

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', message => {
  if(message.content !== '!save') return;
  if(message.attachments.size == 0) {
    message.reply('Dont have any attachments !');
  } else if(message.attachments.size == 1) {
    message.reply('Do something');
  } else {
    message.reply('You can only update 1 score.');
  }
})

// Login to Discord with your client's token
client.login(token);

