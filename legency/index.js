// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const score = require('./src/score')
const fetch = require('node-fetch')
const cv = require('./opencv')

require('dotenv').config()

const token = process.env.TOKEN

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
    message.attachments.forEach(async (value, key, map) => {
      text = await score.transformImageToText(value.url)
      message.reply(text);
    });
  } else {
    message.reply('You can only update 1 score each time.');
  }
})

// Login to Discord with your client's token
client.login(token);

