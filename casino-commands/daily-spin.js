const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'daily spin',
    description: 'daily spin',
    execute(message, args) {

const dailyspin = new Set()

var contents = fs.readFileSync(`./casino/${message.author.username}/credits.json`)
var walletContent = JSON.parse(contents)

                  //Daily Spin
                  
                    if(dailyspin.has(message.author.id)) {
                        message.reply('You have already spun the wheel today!')
                    } else {
                        var dsSpin = new Discord.RichEmbed()
                        .setAuthor('Daily Spin')
                        .setColor(15844367)
                        .setImage('https://media.giphy.com/media/2fNJsREcSgLZnumrAX/giphy.gif')
        
                        var reward = Math.random() * 100;
                        if(reward < 10) {
                            var dsSpin1 = new Discord.RichEmbed()
                            .setAuthor('Daily Spin')
                            .setColor(15844367)
                            .setDescription('With a 10% chance, you won 5,000 credits!')
                            message.channel.send(dsSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(dsSpin1)
                                }, 3000)
                            });
                            dailyspin.add(message.author.id);
                            setTimeout(() => {
                            dailyspin.delete(message.author.id)
                        }, 86400000);
    
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + 5000}`)
                            return;
                        } else if(reward < 25) {
                            var dsSpin2 = new Discord.RichEmbed()
                            .setAuthor('Daily Spin')
                            .setColor(15844367)
                            .setDescription('with a 15% chance, you won 3,500 credits!')
                            message.channel.send(dsSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(dsSpin2)
                                }, 3000)
                            });
                            dailyspin.add(message.author.id);
                            setTimeout(() => {
                            dailyspin.delete(message.author.id)
                        }, 86400000);
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + 3500}`)
                            return;
                        } else if(reward < 50) {
                            var dsSpin3 = new Discord.RichEmbed()
                            .setAuthor('Daily Spin')
                            .setColor(15844367)
                            .setDescription('With a 25% chance, you won 2,000 credits!')
                            message.channel.send(dsSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(dsSpin3)
                                }, 3000)
                            });
                            dailyspin.add(message.author.id);
                        setTimeout(() => {
                            dailyspin.delete(message.author.id)
                        }, 86400000);
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + 2000}`)
                            return;
                        } else
                            var dsSpin4 = new Discord.RichEmbed()
                            .setAuthor('Daily Spin')
                            .setColor(15844367)
                            .setDescription('With a 50% chance, you won 1,000 credits!')
                            message.channel.send(dsSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(dsSpin4)
                                }, 3000)
                            });
                        dailyspin.add(message.author.id);
                        setTimeout(() => {
                            dailyspin.delete(message.author.id)
                        }, 86400000);
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + 1000}`)
                    };  
                }
            }