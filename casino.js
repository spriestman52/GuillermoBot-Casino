const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const client = new Discord.Client();
const channel = new Discord.Channel(client);

//Plug-Ins
const fs = require('fs');
const prefix = ","

//SWAG
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./casino-commands').filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./casino-commands/${file}`)

    client.commands.set(command.name, command)
};

//Config
const config = require('./json/config.json');

//Bot Settings
client.on('ready', () => {
    console.log('GuillermoBot is online!');
    client.user.setActivity(",help")
});

client.on ('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase();
        
            //Commands
        if(command === 'blackjack') {
            client.commands.get('blackjack').execute(message, args);
        };
        if(command === 'dailyspin') {
            client.commands.get('daily spin').execute(message, args);
        };
        if(command === 'casino') {
            client.commands.get('join').execute(message, args);
        };
        if(command === 'lt') {
            client.commands.get('lottery tickets').execute(message, args);
        };
        if(command === 'roulette') {
            client.commands.get('roulette').execute(message, args);
        };
        if(command === 'slots') {
            client.commands.get('slots').execute(message, args);
        };
        if(command === 'wallet') {
            client.commands.get('wallet').execute(message, args);
        };
    });
client.login(config.token);