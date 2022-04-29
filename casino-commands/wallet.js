const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'wallet',
    description: 'wallet',
    execute(message, args) {

        var contents = fs.readFileSync(`./casino/${message.author.username}/credits.json`)
        var walletContent = JSON.parse(contents)

                //Wallet
                    message.channel.send(`You currently have ${walletContent} credits`)
                }
            }