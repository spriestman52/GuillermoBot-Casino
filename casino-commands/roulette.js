const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'roulette',
    description: 'roulette',
    execute(message, args) {
        
        var contents = fs.readFileSync(`./casino/${message.author.username}/credits.json`)
        var walletContent = JSON.parse(contents)

    //Roulette

        var color = Math.random() * 38;
        let bet = args[0]
        parseInt(bet);
    
    
        if(bet > walletContent) {
            message.channel.send('You do not have enough credits.')
            return;
        }
    
    
        if(!args.length) {
            message.channel.send('Please provide valid bet.')
            return;
        } else if(isNaN(bet)) {
            message.channel.send('Please provide valid amount.')
            return;
        } else {
            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - bet}`)
        };
    
    
        var rouletteSpin = new Discord.RichEmbed()
        .setAuthor('Roulette')
        .setImage('https://media3.giphy.com/media/26uf2YTgF5upXUTm0/giphy.gif')
    
        var rouletteRed = new Discord.RichEmbed()
        .setAuthor('Roulette')
        .setDescription('**Red wins!**')
        .setImage('https://media4.giphy.com/media/26uflBhaGt5lQsaCA/giphy.gif') 
    
        var rouletteBlack = new Discord.RichEmbed()
        .setAuthor('Roulette')
        .setDescription('**Black wins!**')
        .setImage('https://media4.giphy.com/media/26uflBhaGt5lQsaCA/giphy.gif')
    
        var rouletteGreen = new Discord.RichEmbed()
        .setAuthor('Roulette')
        .setDescription('**Green wins!**')
        .setImage('https://media4.giphy.com/media/26uflBhaGt5lQsaCA/giphy.gif')
    
        var rouletteGame = new Discord.RichEmbed()
        .setAuthor('Roulette')
        .setDescription('**Make your guess**')
        .setImage('https://i.gifer.com/8Emw.gif')
        
        message.channel.send(rouletteGame).then(msg => {
            msg.react('🟥').then( r => {
                msg.react('⬛').then( r => {
                    msg.react('🟩')
    
                    const red = (reaction, user) => reaction.emoji.name === '🟥' && user.id === message.author.id;
                    const black = (reaction, user) => reaction.emoji.name === '⬛' && user.id === message.author.id;
                    const green = (reaction, user) => reaction.emoji.name === '🟩' && user.id === message.author.id;
    
                    const red1 = msg.createReactionCollector(red, {timer: 6000});
                    const black1 = msg.createReactionCollector(black, {timer: 6000});
                    const green1 = msg.createReactionCollector(green, {timer: 6000});
        
                    red1.on('collect', r => {
    
                        if(color < 18) {
                            msg.edit(rouletteSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(rouletteRed)
                                }, 3000)
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + (bet * 1)}`)
                            });
                            return;
                
                        } else if(color < 36) {
                            msg.edit(rouletteSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(rouletteBlack)
                                }, 3000)
                            });
                            return;
                
                        } else {
                            msg.edit(rouletteSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(rouletteGreen)
                                }, 3000)
                            });
                        };
                        return;
                    });
                    black1.on('collect', r => {
    
                        if(color < 18) {
                            msg.edit(rouletteSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(rouletteRed)
                                }, 3000)
                            });
                            return;
                
                        } else if(color < 36) {
                            msg.edit(rouletteSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(rouletteBlack)
                                }, 3000)
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + (bet * 1)}`)
                            });
                            return;
                
                        } else {
                            msg.edit(rouletteSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(rouletteGreen)
                                }, 3000)
                            });
                        };
                        return;
                    });
                    green1.on('collect', r => {
    
                        if(color < 18) {
                            msg.edit(rouletteSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(rouletteRed)
                                }, 3000)
                            });
                            return;
                
                        } else if(color < 36) {
                            msg.edit(rouletteSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(rouletteBlack)
                                }, 3000)
                            });
                            return;
                
                        } else {
                            msg.edit(rouletteSpin)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(rouletteGreen)
                                }, 3000)
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + (bet * 13)}`)
                            });
                        };
                        return;
                    });
                });
            });
        });
    }
}