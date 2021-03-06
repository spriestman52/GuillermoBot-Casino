const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'slots',
    description: 'slots',
    execute(message, args) {
        
        var contents = fs.readFileSync(`./casino/${message.author.username}/credits.json`)
        var walletContent = JSON.parse(contents)
    
            //Slots

                    let bet = args[0]

                if(bet === 'help') {
                    var slotsHelp = new Discord.RichEmbed()
                    .setAuthor('Slot Machine')
                    .setColor(15844367)
                    .addField('**Winnings**', 'ššā - **.5x**\nššā - **1x**\nššā - **2x**\nššš - **2.5x**\nššš - **3x**\nš°š°ā - **4x**\nššš - **5x**\nš°š°š° - **10x**\nššā - **15x**\nššš - **20x**')
                    .addField('Usage', '**,slots <bet>**')
                    message.channel.send(slotsHelp)
                    return;
                }
                    parseInt(bet)


                    if(bet > walletContent) {
                        message.channel.send('You do not have enough credits.')
                        return;
                    }
                    if(!args.length) {
                        message.channel.send('Please place a valid bet.')
                        return;
                    } else if(isNaN(bet) && bet != 'help') {
                        message.channel.send('Please place a number bet.')
                        return;
                    }

                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - bet}`)

                        //Slots Symbol
                    var slotsSymbol1 = Math.random() * 100;
                        if(slotsSymbol1 < 20) {
                            var sS1 = 'š'
                        } else if(slotsSymbol1 < 40) {
                            var sS1 = 'š'
                        } else if(slotsSymbol1 < 60) {
                            var sS1 = 'š'
                        } else if(slotsSymbol1 < 80) {
                            var sS1 = 'š°'
                        } else {
                            var sS1 = 'š'
                        }

                    var slotsSymbol2 = Math.random() * 100;
                        if(slotsSymbol2 < 20) {
                            var sS2 = 'š'
                        } else if(slotsSymbol2 < 40) {
                            var sS2 = 'š'
                        } else if(slotsSymbol2 < 60) {
                            var sS2 = 'š'
                        } else if(slotsSymbol2 < 80) {
                            var sS2 = 'š°'
                        } else {
                            var sS2 = 'š'
                        }

                    var slotsSymbol3 = Math.random() * 100;
                        if(slotsSymbol3 < 20) {
                            var sS3 = 'š'
                        } else if(slotsSymbol3 < 40) {
                            var sS3 = 'š'
                        } else if(slotsSymbol3 < 60) {
                            var sS3 = 'š'
                        } else if(slotsSymbol3 < 80) {
                            var sS3 = 'š°'
                        } else {
                            var sS3 = 'š'
                        }

                        var slotsSymbol4 = Math.random() * 100;
                        if(slotsSymbol4 < 20) {
                            var sS4 = 'š'
                        } else if(slotsSymbol4 < 40) {
                            var sS4 = 'š'
                        } else if(slotsSymbol4 < 60) {
                            var sS4 = 'š'
                        } else if(slotsSymbol4 < 80) {
                            var sS4 = 'š°'
                        } else {
                            var sS4 = 'š'
                        }

                    var slotsSymbol5 = Math.random() * 100;
                        if(slotsSymbol5 < 20) {
                            var sS5 = 'š'
                        } else if(slotsSymbol5 < 40) {
                            var sS5 = 'š'
                        } else if(slotsSymbol5 < 60) {
                            var sS5 = 'š'
                        } else if(slotsSymbol5 < 80) {
                            var sS5 = 'š°'
                        } else {
                            var sS5 = 'š'
                        }

                    var slotsSymbol6 = Math.random() * 100;
                        if(slotsSymbol6 < 20) {
                            var sS6 = 'š'
                        } else if(slotsSymbol6 < 40) {
                            var sS6 = 'š'
                        } else if(slotsSymbol6 < 60) {
                            var sS6 = 'š'
                        } else if(slotsSymbol6 < 80) {
                            var sS6 = 'š°'
                        } else {
                            var sS6 = 'š'
                        }

                        var slotsSymbol7 = Math.random() * 100;
                        if(slotsSymbol7 < 30) {
                            var sS7 = 'š'
                        } else if(slotsSymbol7 < 50) {
                            var sS7 = 'š'
                        } else if(slotsSymbol7 < 70) {
                            var sS7 = 'š'
                        } else if(slotsSymbol7 < 90) {
                            var sS7 = 'š°'
                        } else {
                            var sS7 = 'š'
                        }

                        var slotsSymbol8 = Math.random() * 100;
                        if(slotsSymbol8 < 30) {
                            var sS8 = 'š'
                        } else if(slotsSymbol8 < 60) {
                            var sS8 = 'š'
                        } else if(slotsSymbol8 < 80) {
                            var sS8 = 'š'
                        } else if(slotsSymbol8 < 95) {
                            var sS8 = 'š°'
                        } else {
                            var sS8 = 'š'
                        }

                        var slotsSymbol9 = Math.random() * 100;
                        if(slotsSymbol9 < 30) {
                            var sS9 = 'š'
                        } else if(slotsSymbol9 < 60) {
                            var sS9 = 'š'
                        } else if(slotsSymbol9 < 80) {
                            var sS9 = 'š'
                        } else if(slotsSymbol9 < 95) {
                            var sS9 = 'š°'
                        } else {
                            var sS9 = 'š'
                        }


                    var slotGame1 = new Discord.RichEmbed()
                    .setColor(15844367)
                    .setTitle('Slots')
                    .addField('Credits', `${walletContent}`)
                    .addField(`**Playing: ${message.author.username}**`, `------------------\n| ${sS1} | ${sS2} | ${sS3} |\n------------------`)

                    var slotGame2 = new Discord.RichEmbed()
                    .setColor(15844367)
                    .setTitle('Slots')
                    .addField('Credits', `${walletContent}`)
                    .addField(`**Playing: ${message.author.username}**`, `------------------\n| ${sS4} | ${sS5} | ${sS6} |\n------------------`)

                    var slotGame3 = new Discord.RichEmbed()
                    .setColor(15844367)
                    .setTitle('Slots')
                    .addField('Credits', `${walletContent}`)
                    .addField(`**Playing: ${message.author.username}**`, `------------------\n| ${sS7} | ${sS8} | ${sS9} |\n------------------`)

                    var slotGame4 = new Discord.RichEmbed()
                    .setColor(15844367)
                    .setTitle('Slots')
                    .addField('Credits', `${walletContent}`)
                    .addField(`**Playing: ${message.author.username}**`, `------------------\n| ${sS7} | ${sS8} | ${sS9} |\n------------------`)

                    message.channel.send(slotGame1)
                    .then((msg) => {
                        setTimeout(() => {
                            msg.edit(slotGame2)
                            .then((msg) => {
                                setTimeout(() => {
                                    msg.edit(slotGame3)
                    if(sS7 + sS8 == 'šš' || sS8 + sS9 == 'šš' || sS7 + sS8 + sS9 == 'ššš') {
                        if(sS7 + sS8 == 'šš' || sS8 + sS9 == 'šš') {
                            let winnings = bet * .5
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if(sS7 + sS8 + sS9 == 'ššš') {
                            let winnings = bet * 2.5
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        msg.edit(slotGame4)


                    } else if(sS7 + sS8 == 'šš' || sS8 + sS9 == 'šš' || sS7 + sS8 + sS9 == 'ššš') {
                        if(sS7 + sS8 == 'šš' || sS8 + sS9 == 'šš') {
                            let winnings = bet * 1
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if(sS7 + sS8 + sS9 == 'ššš') {
                            let winnings = bet * 3
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        msg.edit(slotGame4)


                    } else if(sS7 + sS8 == 'šš' || sS8 + sS9 == 'šš' || sS7 + sS8 + sS9 == 'ššš') {
                        if(sS7 + sS8 == 'šš' || sS8 + sS9 == 'šš') {
                            let winnings = bet * 2
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if(sS7 + sS8 + sS9 == 'ššš') {
                            let winnings = bet * 5
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        msg.edit(slotGame4)
                        

                    } else if(sS7 + sS8 == 'š°š°' || sS8 + sS9 == 'š°š°' || sS7 + sS8 + sS9 == 'š°š°š°') {
                        if(sS7 + sS8 == 'š°š°' || sS8 + sS9 == 'š°š°') {
                            let winnings = bet * 4
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if (sS7 + sS8 + sS9 == 'š°š°š°') {
                            let winnings = bet * 10
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        msg.edit(slotGame4)


                    } else if(sS7 + sS8 == 'šš' || sS8 + sS9 == 'šš' || sS7 + sS8 + sS9 == 'ššš') {
                        if(sS7 + sS8 == 'šš' || sS8 + sS9 == 'šš') {
                            let winnings = bet * 15
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if(sS7 + sS8 + sS9 == 'ššš') {
                            let winnings = bet * 20
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        msg.edit(slotGame4)
                    }


                }, 250)
            });
        }, 250)
    });
        }
    }