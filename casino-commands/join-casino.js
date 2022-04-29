const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'join',
    description: 'noin',
    execute(message, args) {


           //Join Casino

                if(fs.existsSync(`./casino/${message.author.username}/credits.json`)) {
                message.channel.send("You're already in the Casino!")
                    return;
                }
                    fs.mkdir(`./casino/${message.author.username}/`, `1`, (err) => {
                        if (err) throw err;
                    });
                    fs.writeFile(`./casino/${message.author.username}/credits.json`, `1000`, (err) => {
                        if (err) throw err;
                            console.log(`${message.author.username} has entered the casino!`)
                    });

                    fs.mkdir(`./casino/${message.author.username}/lottery-tickets/`, `1`,  (err) => {
                        if (err) throw err;
                    });
                    fs.writeFile(`./casino/${message.author.username}/lottery-tickets/guillermos-farm.json`, `1`, (err) => {
                        if (err) throw err;
                    });
                    fs.writeFile(`./casino/${message.author.username}/lottery-tickets/lucky-hearts.json`, `1`, (err) => {
                        if (err) throw err;
                    });
                    fs.writeFile(`./casino/${message.author.username}/lottery-tickets/loose-change.json`, `1`, (err) => {
                        if (err) throw err;
                    });
                    fs.writeFile(`./casino/${message.author.username}/lottery-tickets/winter-wonderland.json`, `1`, (err) => {
                        if (err) throw err;
                    });
                    fs.writeFile(`./casino/${message.author.username}/lottery-tickets/big-spenderz.json`, `1`, (err) => {
                        if (err) throw err;
                    });

                var casinoWelcome = new Discord.RichEmbed()
                .setAuthor(`Welcome to Guillermo's casino!`)
                .setDescription('1000 Credits have been added to your wallet!')
                .setColor(15844367)
                .setThumbnail('https://s7d2.scene7.com/is/image/ritzcarlton/RCARUBA_00081_conversion?$XlargeViewport100pct$')
                message.channel.send(casinoWelcome)
        }
}