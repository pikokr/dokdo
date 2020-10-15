const Discord = require('discord.js');
const client = new Discord.Client();

const Dokdo = require('../src')

const DokdoHandler = new Dokdo(client, { aliases: [ 'dokdo', 'dok' ], owners: [ "285185716240252929" ], prefix: '!', noPerm: (message) => message.reply('No Permission') })
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    // if(message.author.id !== "285185716240252929" || !message.content.startsWith('*')) return

    DokdoHandler.run(message)
    
}); 

client.login('');