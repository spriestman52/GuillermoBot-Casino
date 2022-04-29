const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'lottery tickets',
    description: 'lottery tickets',
    execute(message, args) {

        var contents = fs.readFileSync(`./casino/${message.author.username}/credits.json`)
        var walletContent = JSON.parse(contents)

        //Lottery Tickets

            let buy = args[0]
            let lt1 = args[1]
            let lt2 = args[2]
            let amount = args[3]
            parseInt(amount);
            
        
                        //Lottery Tickets Help
            if(buy === 'help') {
        
                var ltHelp = new Discord.RichEmbed()
            .setAuthor('Casino Store')
            .setColor(15844367)
                //All coins add up to $1
            .addField('Loose Change \n100 credits', 'Can reward up to 1,000 credits!', true)
                //Match 3 symbols
            .addField('Winter Wonderland \n500 credits', 'Can reward up to 10,000 credits!', true)
                //Match 3 hearts
            .addField('Lucky Hearts \n1000 credits', 'Can reward up to 10,000 credits!', true)
                //Match 1 animal
            .addField("Guillermo's Farm \n1000 credits", "Can reward up to 10,000 credits!", true)
            .addField('Buying', '**,lt buy <item>**', true)
            .addField('Usage', '**,lt <item>**')
            .setFooter(`${contents} credits to spend.`)
        
            message.channel.send(ltHelp)
            };
        
                    //Lottery Tickets Buy
            if(buy === 'buy') {
        
                if(!args.length) {
                    message.channel.send('Please provide lottery ticket and valid amount.')
                    return;
                } else if(isNaN(amount)) {
                    message.channel.send('Please provide valid amount.')
                    return
                };
        
        
                //Buy Hearts
            if(lt1 === 'lucky' && lt2 === 'hearts') {
                var hA = amount * 1000
                if(hA > contents) {
                    message.channel.send('You do not have enough credits.')
                } else {
                    var ltcontents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/lucky-hearts.json`)
                    var heartscontent = JSON.parse(ltcontents)
                    fs.writeFile(`./casino/${message.author.username}/lottery-tickets/lucky-hearts.json`, `${+amount + +heartscontent}`, (err) => {
                        if (err) throw err;
                    });
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - hA}`)
                    message.channel.send(`You bought ${amount} Lucky Hearts lottery ticket(s)!`)
                };
        
                //Buy Loose Change
            } else if(lt1 === 'loose' && lt2 === 'change') {
                    var lcA = amount * 100
                    if(lcA > contents) {
                        message.channel.send('You do not have enough credits.')
                    } else {
                        var ltcontents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/loose-change.json`)
                        var lccontent = JSON.parse(ltcontents)
                        fs.writeFile(`./casino/${message.author.username}/lottery-tickets/loose-change.json`, `${+lccontent + +amount}`, (err) => {
                            if (err) throw err;
                        });
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - lcA}`)
                        message.channel.send(`You bought ${amount} Loose Change lottery ticket(s)!`)
                    }
            
                    //Buy Winter Wonderland
                } else if(lt1 === 'winter' && lt2 === 'wonderland') {
                    var sA = amount * 500
                    if(sA > contents) {
                        message.channel.send('You do not have enough credits.')
                    } else {
                        var ltcontents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/winter-wonderland.json`)
                        var wwcontent = JSON.parse(ltcontents)
                        fs.writeFile(`./casino/${message.author.username}/lottery-tickets/winter-wonderland.json`, `${+wwcontent + +amount}`, (err) => {
                            if (err) throw err;
                        });
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - sA}`)
                        message.channel.send(`You bought ${amount} Winter Wonderland lottery ticket(s)!`)
                    }
        
                    //Buy Big Spenderz
                } else if(lt1 === 'big' && lt2 === 'spenderz') {
                    var bsA = amount * 10000
                    if(bsA > contents) {
                        message.channel.send('You do not have enough credits.')
                    } else {
                        var ltcontents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/big-spenderz.json`)
                        var wwcontent = JSON.parse(ltcontents)
                        fs.writeFile(`./casino/${message.author.username}/lottery-tickets/big-spenderz.json`, `${+wwcontent + +amount}`, (err) => {
                            if (err) throw err;
                        });
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - bsA}`)
                        message.channel.send(`You bought ${amount} Big Spenderz lottery ticket(s)!`)
                    }
            
                    //Buy Guillermo's Farm
                } else if(lt1 === 'guillermos' && lt2 === 'farm') {
                    var gfA = amount * 1000
                    if(gfA > contents) {
                        message.channel.send('You do not have enough credits.')
                    } else {
                        var ltcontents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/guillermos-farm.json`)
                        var gfcontent = JSON.parse(ltcontents)
                        fs.writeFile(`./casino/${message.author.username}/lottery-tickets/guillermos-farm.json`, `${+gfcontent + +amount}`, (err) => {
                            if (err) throw err;
                        });
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - gfA}`)
                        message.channel.send(`You bought ${amount} Guillermo's Farm lottery ticket(s)!`)
                    }
                };
                } else {
        
            if(!args.length) {
        
                var lcTickets = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/loose-change.json`)
                var wwTickets = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/winter-wonderland.json`)
                var heartsTickets = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/lucky-hearts.json`)
                var gfTickets = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/guillermos-farm.json`)
                var bsTickets = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/big-spenderz.json`)
                var lTickets = new Discord.RichEmbed()
                .setAuthor('Lottery Tickets')
                .setColor(15844367)
                .addField('**Loose Change**', `${lcTickets}`, true)
                .addField('**Winter Wonderland**', `${wwTickets}`, true)
                .addField('**Lucky Hearts**', `${heartsTickets}`, true)
                .addField("**Guillermo's Farm**", `${gfTickets}`, true)
                .addField("**Big Spenderz**", `${bsTickets}`, true)
                .setFooter(`${contents} credits`)
                message.channel.send(lTickets)
            };
        
        
                    //Loose Change
            var tickLC1 = Math.random() * 100;
                if(tickLC1 < 40) {
                    var LC1 = '.01'
                } else if(tickLC1 < 70) {
                    var LC1 = '.05'
                } else if(tickLC1 < 90) {
                    var LC1 = '.25'
                } else {
                    var LC1 = '.50'
                }
        
            var tickLC2 = Math.random() * 100;
                if(tickLC2 < 40) {
                    var LC2 = '.01'
                } else if(tickLC2 < 70) {
                    var LC2 = '.05'
                } else if(tickLC2 < 90) {
                    var LC2 = '.25'
                } else {
                    var LC2 = '.50'
                }
        
            var tickLC3 = Math.random() * 100;
                if(tickLC3 < 40) {
                    var LC3 = '.01'
                } else if(tickLC3 < 70) {
                    var LC3 = '.05'
                } else if(tickLC3 < 90) {
                    var LC3 = '.25'
                } else {
                    var LC3 = '.50'
                }
        
            var tickLC4 = Math.random() * 100;
                if(tickLC4 < 40) {
                    var LC4 = '.01'
                } else if(tickLC4 < 70) {
                    var LC4 = '.05'
                } else if(tickLC4 < 90) {
                    var LC4 = '.25'
                } else {
                    var LC4 = '.50'
                }
        
            var tickLC5 = Math.random() * 100;
                if(tickLC5 < 20) {
                    var LC5 = '.50'
                } else if(tickLC5 < 50) {
                    var LC5 = '.25'
                } else {
                    var LC5 = '.05'
                }
        
            var tickLC6 = Math.random() * 100;
                if(tickLC6 < 40) {
                    var LC6 = '.25'
                } else if(tickLC6 < 80) {
                    var LC6 = '.05'
                } else {
                    var LC6 = '.50'
                }
        
            var useTicketLC = new Discord.RichEmbed()
                .setAuthor('Lottery Ticket')
                .setColor(15844367)
                .setDescription('Loose Change')
                .addField('**Good Luck!**', `------------------\n| ||${LC1}|| | ||${LC2}|| | ||${LC3}|| |\n------------------\n| ||${LC4}|| | ||${LC5}|| | ||${LC6}|| |\n------------------`)
        
            if(buy === 'loose' && lt1 === 'change') {
        
                var ticContents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/loose-change.json`)
                var tics = JSON.parse(ticContents)
        
                if(args.length) {
                    if(tics == 0) {
                        message.channel.send("You don't have any lottery tickets.")
                        return;
                    }
                }
        
                fs.writeFile(`./casino/${message.author.username}/lottery-tickets/loose-change.json`, `${tics - 1}`, (err) => {
                    if (err) throw err;
                });
        
                message.channel.send(useTicketLC).then((msg) => {
                    setTimeout(() => {

                var winner = +LC1 + +LC2 + +LC3 + +LC4 + +LC5 + +LC6
                    if(winner >= 1.00) {
                        var ltCredsW = Math.random() * 100;
                            if(ltCredsW < 50) {
                                var ltCreds = 100;
                                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                                    setTimeout(() => {
                                        useTicketLC.setFooter(`Winnings: ${ltCreds}`)
                                        msg.edit(useTicketLC)
                                    }, 5000)
                                    return;
                            } else if(ltCredsW < 80) {
                                var ltCreds = 250;
                                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                                    setTimeout(() => {
                                        useTicketLC.setFooter(`Winnings: ${ltCreds}`)
                                        msg.edit(useTicketLC)
                                    }, 5000)
                                    return;
                            } else if(ltCredsW < 95) {
                                var ltCreds = 400;
                                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                                    setTimeout(() => {
                                        useTicketLC.setFooter(`Winnings: ${ltCreds}`)
                                        msg.edit(useTicketLC)
                                    }, 5000)
                                    return;
                            } else {
                                var ltCreds = 1000;
                                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                                    setTimeout(() => {
                                        useTicketLC.setFooter(`Winnings: ${ltCreds}`)
                                        msg.edit(useTicketLC)
                                    }, 5000)
                                }
                    } else if(winner < 1.00) {
                        setTimeout(() => {
                            useTicketLC.setFooter('Loser!')
                            msg.edit(useTicketLC)
                        }, 5000)
                            };
                    }, 3000)
                        });
                    };
        
                    //Winter Wonderland
            var tickWW1 = Math.random() * 100;
                if(tickWW1 < 25) {
                    var WW1 = '🐧'
                } else if(tickWW1 < 40) {
                    var WW1 = '❄️'
                } else if(tickWW1 < 55) {
                    var WW1 = '⛄'
                } else if(tickWW1 < 70) {
                    var WW1 = '⛷️'
                } else if(tickWW1 < 80) {
                    var WW1 = '🏂'
                } else if(tickWW1 < 90){
                    var WW1 = '🎅'
                } else if(tickWW1 < 95) {
                    var WW1 = '🌨️'
                } else {
                    var WW1 = '🏔️'
                }
        
            var tickWW2 = Math.random() * 100;
                if(tickWW2 < 12.5) {
                    var WW2 = '🐧'
                } else if(tickWW2 < 25) {
                    var WW2 = '❄️'
                } else if(tickWW2 < 37.5) {
                    var WW2 = '⛄'
                } else if(tickWW2 < 50) {
                    var WW2 = '⛷️'
                } else if(tickWW2 < 62.5) {
                    var WW2 = '🏂'
                } else if(tickWW2 < 75) {
                    var WW2 = '🎅'
                } else if(tickWW2 < 87.5) {
                    var WW2 = '🌨️'
                } else {
                    var WW2 = '🏔️'
                }
        
            var tickWW3 = Math.random() * 100;
                if(tickWW3 < 12.5) {
                    var WW3 = '🐧'
                } else if(tickWW3 < 25) {
                    var WW3 = '❄️'
                } else if(tickWW3 < 37.5) {
                    var WW3 = '⛄'
                } else if(tickWW3 < 50) {
                    var WW3 = '⛷️'
                } else if(tickWW3 < 62.5) {
                    var WW3 = '🏂'
                } else if(tickWW3 < 75) {
                    var WW3 = '🎅'
                } else if(tickWW3 < 87.5) {
                    var WW3 = '🌨️'
                } else {
                    var WW3 = '🏔️'
                }
        
            var tickWW4 = Math.random() * 100;
                if(tickWW4 < 12.5) {
                    var WW4 = '🐧'
                } else if(tickWW4 < 25) {
                    var WW4 = '❄️'
                } else if(tickWW4 < 37.5) {
                    var WW4 = '⛄'
                } else if(tickWW4 < 50) {
                    var WW4 = '⛷️'
                } else if(tickWW4 < 62.5) {
                    var WW4 = '🏂'
                } else if(tickWW4 < 75) {
                    var WW4 = '🎅'
                } else if(tickWW4 < 87.5) {
                    var WW4 = '🌨️'
                } else {
                    var WW4 = '🏔️'
            
                }
        
            var tickWW5 = Math.random() * 100;
                if(tickWW5 < 12.5) {
                    var WW5 = '🐧'
                } else if(tickWW5 < 25) {
                    var WW5 = '❄️'
                } else if(tickWW5 < 37.5) {
                    var WW5 = '⛄'
                } else if(tickWW5 < 50) {
                    var WW5 = '⛷️'
                } else if(tickWW5 < 62.5) {
                    var WW5 = '🏂'
                } else if(tickWW5 < 75) {
                    var WW5 = '🎅'
                } else if(tickWW5 < 87.5) {
                    var WW5 = '🌨️'
                } else {
                    var WW5 = '🏔️'
                }
        
            var tickWW6 = Math.random() * 100;
                if(tickWW6 < 12.5) {
                    var WW6 = '🐧'
                } else if(tickWW6 < 25) {
                    var WW6 = '❄️'
                } else if(tickWW6 < 37.5) {
                    var WW6 = '⛄'
                } else if(tickWW6 < 50) {
                    var WW6 = '⛷️'
                } else if(tickWW6 < 62.5) {
                    var WW6 = '🏂'
                } else if(tickWW6 < 75) {
                    var WW6 = '🎅'
                } else if(tickWW6 < 87.5) {
                    var WW6 = '🌨️'
                } else {
                    var WW6 = '🏔️'
                }
        
                var tickWW7 = Math.random() * 100;
                if(tickWW7 < 12.5) {
                    var WW7 = '🐧'
                } else if(tickWW7 < 25) {
                    var WW7 = '❄️'
                } else if(tickWW7 < 37.5) {
                    var WW7 = '⛄'
                } else if(tickWW7 < 50) {
                    var WW7 = '⛷️'
                } else if(tickWW7 < 62.5) {
                    var WW7 = '🏂'
                } else if(tickWW7 < 75) {
                    var WW7 = '🎅'
                } else if(tickWW7 < 87.5) {
                    var WW7 = '🌨️'
                } else {
                    var WW7 = '🏔️'
                }
        
            var useTicketWW = new Discord.RichEmbed()
                .setAuthor('Lottery Ticket')
                .setColor(15844367)
                .setDescription('Winter Wonderland')
                .addField('**Good Luck!**', `Winning Symbol: \n||${WW1}||\n------------------\n| ||${WW2}|| | ||${WW3}|| | ||${WW4}|| |\n------------------\n| ||${WW5}|| | ||${WW6}|| | ||${WW7}|| |\n------------------`)
        
            if(buy === 'winter' && lt1 === 'wonderland') {
        
                let symbols = ['🐧','❄️','⛄','⛷️','🏂','🎅','🌨️','🏔️']
        
                var ticContents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/winter-wonderland.json`)
                var tics = JSON.parse(ticContents)
        
                if(args.length) {
                    if(tics == 0) {
                        message.channel.send("You don't have any lottery tickets.")
                        return;
                    }
                }
        
                fs.writeFile(`./casino/${message.author.username}/lottery-tickets/winter-wonderland.json`, `${tics - 1}`, (err) => {
                    if (err) throw err;
                });
        
            message.channel.send(useTicketWW).then((msg) => {
                setTimeout(() => {
        
            if(WW1 == WW2 || WW1 == WW3 || WW1 == WW4 || WW1 == WW5 || WW1 == WW6 || WW1 == WW7) {
                if(WW1 == symbols[0]) {
                    let winnings = 500
                    useTicketWW.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketWW)
                }
        
                if(WW1 == symbols[1]) {
                    let winnings = 750
                    useTicketWW.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketWW)
                }
        
                if(WW1 == symbols[2]) {
                    let winnings = 1000
                    useTicketWW.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketWW)
                }
        
                if(WW1 == symbols[3]) {
                    let winnings = 2000
                    useTicketWW.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketWW)
                }
        
                if(WW1 == symbols[4]) {
                    let winnings = 3000
                    useTicketWW.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketWW)
                }
        
                if(WW1 == symbols[5]) {
                    let winnings = 4000
                    useTicketWW.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketWW)
                }
        
                if(WW1 == symbols[6]) {
                    let winnings = 5000
                    useTicketWW.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketWW)
                }
        
                if(WW1 == symbols[7]) {
                    let winnings = 10000
                    useTicketWW.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketWW)
                }
        
            } else if(WW1 != WW2 || WW1 != WW3 || WW1 != WW4 || WW1 != WW5 || WW1 != WW6 || WW1 != WW7) {
                setTimeout(() => {
                    useTicketWW.setFooter('Loser!')
                    msg.edit(useTicketWW)
                }, 5000)
            };
            }, 3000)
            });
            };
                //Guillermo's Farm
            var tickGF1 = Math.random() * 100;
                if(tickGF1 < 8) {
                    var GF1 = '🐄'
                } else if(tickGF1 < 16) {
                    var GF1 = '🐖'
                } else if(tickGF1 < 24) {
                    var GF1 = '🐑'
                } else if(tickGF1 < 32) {
                    var GF1 = '🐔'   
                } else if(tickGF1 < 40) {
                    var GF1 = '🐴'   
                } else if(tickGF1 < 48) {
                    var GF1 = '🐇'   
                } else if(tickGF1 < 56) {
                    var GF1 = '🐕'   
                } else if(tickGF1 < 64) {
                    var GF1 = '🐈'   
                } else if(tickGF1 < 72) {
                    var GF1 = '🦙'   
                } else if(tickGF1 < 80) {
                    var GF1 = '🦃'   
                } else if(tickGF1 < 88) {
                    var GF1 = '🐦'   
                } else {
                    var GF1 = '🐃'   
                }
        
            var tickGF2 = Math.random() * 100;
                if(tickGF2 < 25) {
                    var GF2 = '🐄'
                } else if(tickGF2 < 50) {
                    var GF2 = '🐖'
                } else if(tickGF2 < 75) {
                    var GF2 = '🐑'
                } else {
                    var GF2 = '🐔'
                }
        
            var tickGF3 = Math.random() * 100;
                if(tickGF3 < 25) {
                    var GF3 = '🐴'
                } else if(tickGF3 < 50) {
                    var GF3 = '🐇'
                } else if(tickGF3 < 75) {
                    var GF3 = '🐕'
                } else {
                    var GF3 = '🐈'
                }
        
            var tickGF4 = Math.random() * 100;
                if(tickGF4 < 25) {
                    var GF4 = '🦙'
                } else if(tickGF4 < 50) {
                    var GF4 = '🦃'
                } else if(tickGF4 < 75) {
                    var GF4 = '🐃'
                } else {
                    var GF4 = '🐦'
                }
        
                var tickGF5 = Math.random() * 100;
                if(tickGF5 < 25) {
                    var GF5 = '🐄'
                } else if(tickGF5 < 50) {
                    var GF5 = '🐖'
                } else if(tickGF5 < 75) {
                    var GF5 = '🐑'
                } else {
                    var GF5 = '🐔'
                }
        
            var tickGF6 = Math.random() * 100;
                if(tickGF6 < 25) {
                    var GF6 = '🐴'
                } else if(tickGF6 < 50) {
                    var GF6 = '🐇'
                } else if(tickGF6 < 75) {
                    var GF6 = '🐕'
                } else {
                    var GF6 = '🐈'
                }
        
            var tickGF7 = Math.random() * 100;
                if(tickGF7 < 25) {
                    var GF7 = '🦙'
                } else if(tickGF7 < 50) {
                    var GF7 = '🦃'
                } else if(tickGF7 < 75) {
                    var GF7 = '🐃'
                } else {
                    var GF7 = '🐦'
                }
            var useTicketGF = new Discord.RichEmbed()
                .setAuthor('Lottery Ticket')
                .setColor(15844367)
                .setDescription("Guillermo's Farm")
                .addField('**Good Luck!**', `Winning Symbol: \n||${GF1}||\n------------------\n| ||${GF2}|| | ||${GF3}|| | ||${GF4}|| |\n------------------\n| ||${GF5}|| | ||${GF6}|| | ||${GF7}|| |\n------------------`)
        
            if(buy === 'guillermos' && lt1 === 'farm') {
        
                var ticContents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/guillermos-farm.json`)
                var tics = JSON.parse(ticContents)
        
                if(args.length) {
                    if(tics == 0) {
                        message.channel.send("You don't have any lottery tickets.")
                        return;
                    }
                }
        
                fs.writeFile(`./casino/${message.author.username}/lottery-tickets/guillermos-farm.json`, `${tics - 1}`, (err) => {
                    if (err) throw err;
                });
        
            message.channel.send(useTicketGF).then((msg) => {
                setTimeout(() => {

            if(GF1 == GF2 || GF1 == GF3 || GF1 == GF4 || GF1 == GF5 || GF1 == GF6 || GF1 == GF7) {
                var ltCredsW = Math.random() * 100;
                    if(ltCredsW < 50) {
                        var ltCreds = 1000;
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                            setTimeout(() => {
                                useTicketGF.setFooter(`Winnings: ${ltCreds}`)
                                msg.edit(useTicketGF)
                            }, 5000)
                            return;
                    } else if(ltCredsW < 80) {
                        var ltCreds = 2500;
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                            setTimeout(() => {
                                useTicketGF.setFooter(`Winnings: ${ltCreds}`)
                                msg.edit(useTicketGF)
                            }, 5000)
                            return;
                    } else if(ltCredsW < 95) {
                        var ltCreds = 4000;
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                            setTimeout(() => {
                                useTicketGF.setFooter(`Winnings: ${ltCreds}`)
                                msg.edit(useTicketGF)
                            }, 5000)
                            return;
                    } else {
                        var ltCreds = 10000;
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                            setTimeout(() => {
                                useTicketGF.setFooter(`Winnings: ${ltCreds}`)
                                msg.edit(useTicketGF)
                            }, 5000)
                        }
            } else if(GF1 != GF2 || GF1 != GF3 || GF1 != GF4 || GF1 != GF5 || GF1 != GF6 || GF1 != GF7) {
                setTimeout(() => {
                    useTicketGF.setFooter(`Loser!`)
                    msg.edit(useTicketGF)
                }, 5000)
                    };
                });
            }, 3000)
                };
                        //Lucky Hearts
            var tickH1 = Math.random() * 100;
                if(tickH1 < 25) {
                    var H1 = '💙'
                } else if(tickH1 < 50) {
                    var H1 = '💚'
                } else if(tickH1 < 75) {
                    var H1 = '💜'
                } else {
                    var H1 = '💛'
                }
        
            var tickH2 = Math.random() * 100;
                if(tickH2 < 25) {
                    var H2 = '💙'
                } else if(tickH2 < 50) {
                    var H2 = '💚'
                } else if(tickH2 < 75) {
                    var H2 = '💜'
                } else {
                    var H2 = '💛'
                }
        
            var tickH3 = Math.random() * 100;
                if(tickH3 < 25) {
                    var H3 = '💙'
                } else if(tickH3 < 50) {
                    var H3 = '💚'
                } else if(tickH3 < 75) {
                    var H3 = '💜'
                } else {
                    var H3 = '💛'
                }
        
            var tickH4 = Math.random() * 100;
                if(tickH4 < 25) {
                    var H4 = '💙'
                } else if(tickH4 < 50) {
                    var H4 = '💚'
                } else if(tickH4 < 75) {
                    var H4 = '💜'
                } else {
                    var H4 = '💛'
                }
        
            var tickH5 = Math.random() * 100;
                if(tickH5 < 25) {
                    var H5 = '💙'
                } else if(tickH5 < 50) {
                    var H5 = '💚'
                } else if(tickH5 < 75) {
                    var H5 = '💜'
                } else {
                    var H5 = '💛'
                }
        
            var tickH6 = Math.random() * 100;
                if(tickH6 < 25) {
                    var H6 = '💙'
                } else if(tickH6 < 50) {
                    var H6 = '💚'
                } else if(tickH6 < 75) {
                    var H6 = '💜'
                } else {
                    var H6 = '💛'
                }
                var tickH7 = Math.random() * 100;
                if(tickH7 < 25) {
                    var H7 = '💙'
                } else if(tickH7 < 50) {
                    var H7 = '💚'
                } else if(tickH7 < 75) {
                    var H7 = '💜'
                } else {
                    var H7 = '💛'
                }
                var tickH8 = Math.random() * 100;
                if(tickH8 < 25) {
                    var H8 = '💙'
                } else if(tickH8 < 50) {
                    var H8 = '💚'
                } else if(tickH8 < 75) {
                    var H8 = '💜'
                } else {
                    var H8 = '💛'
                }
                var tickH9 = Math.random() * 100;
                if(tickH9 < 25) {
                    var H9 = '💙'
                } else if(tickH9 < 50) {
                    var H9 = '💚'
                } else if(tickH9 < 75) {
                    var H9 = '💜'
                } else {
                    var H9 = '💛'
                }
        
            
        
            if(buy === 'lucky' && lt1 === 'hearts') {
        
                var useTicketH = new Discord.RichEmbed()
                .setAuthor('Lottery Ticket')
                .setColor(15844367)
                .setDescription('Lucky Hearts')
                .addField('**Good Luck!**', `------------------\n| ||${H1}|| | ||${H2}|| | ||${H3}|| |\n------------------\n| ||${H4}|| | ||${H5}|| | ||${H6}|| |\n------------------\n| ||${H7}|| | ||${H8}|| | ||${H9}|| |\n------------------`)
        
                
                var ticContents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/lucky-hearts.json`)
                var tics = JSON.parse(ticContents)
        
                if(args.length) {
                    if(tics == 0) {
                        message.channel.send("You don't have any lottery tickets.")
                        return;
                    }
                }
        
                fs.writeFile(`./casino/${message.author.username}/lottery-tickets/lucky-hearts.json`, `${tics - 1}`, (err) => {
                    if (err) throw err;
                });
        
            message.channel.send(useTicketH).then((msg) => {
                setTimeout(() => {
        
        
                if(H1 + H2 + H3 == '💙💙💙' || H4 + H5 + H6 == '💙💙💙' || H7 + H8 + H9 == '💙💙💙' || H1 + H4 + H7 == '💙💙💙' || H2 + H5 + H8 =='💙💙💙' || H3 + H6 + H9 == '💙💙💙' || H1 + H5 + H9 == '💙💙💙' || H3 + H5 + H8 ==='💙💙💙') {
                    let winnings = 5000
                    useTicketH.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketH)
                }
                if(H1 + H2 + H3 == '💚💚💚' || H4 + H5 + H6 == '💚💚💚' || H7 + H8 + H9 == '💚💚💚' || H1 + H4 + H7 == '💚💚💚' || H2 + H5 + H8 =='💚💚💚' || H3 + H6 + H9 == '💚💚💚' || H1 + H5 + H9 == '💚💚💚' || H3 + H5 + H8 ==='💚💚💚') {
                    let winnings = 7500
                    useTicketH.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketH)
                }
                if(H1 + H2 + H3 == '💜💜💜' || H4 + H5 + H6 == '💜💜💜' || H7 + H8 + H9 == '💜💜💜' || H1 + H4 + H7 == '💜💜💜' || H2 + H5 + H8 =='💜💜💜' || H3 + H6 + H9 == '💜💜💜' || H1 + H5 + H9 == '💜💜💜' || H3 + H5 + H8 ==='💜💜💜') {
                    let winnings = 10000
                    useTicketH.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketH)
                }
                if(H1 + H2 + H3 == '💛💛💛' || H4 + H5 + H6 == '💛💛💛' || H7 + H8 + H9 == '💛💛💛' || H1 + H4 + H7 == '💛💛💛' || H2 + H5 + H8 =='💛💛💛' || H3 + H6 + H9 == '💛💛💛' || H1 + H5 + H9 == '💛💛💛' || H3 + H5 + H8 ==='💛💛💛') {
                    let winnings = 20000
                    useTicketH.setFooter(`Winnings: ${winnings}`)
                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                    msg.edit(useTicketH)
                };
                }, 10000)
            });
        };
        };
                //Big Spenderz
            var tickBS1 = Math.random() * 100;
            if(tickBS1 < 25) {
                var BS1 = '💲'
            } else if(tickBS1 < 40) {
                var BS1 = '💷'
            } else if(tickBS1 < 55) {
                var BS1 = '💵'
            } else if(tickBS1 < 70) {
                var BS1 = '💴'
            } else if(tickBS1 < 80) {
                var BS1 = '💸'
            } else if(tickBS1 < 90){
                var BS1 = '💰'
            } else if(tickBS1 < 95) {
                var BS1 = '💳'
            } else {
                var BS1 = '🤑'
            }
        
            var tickBS2 = Math.random() * 100;
            if(tickBS2 < 12.5) {
                var BS2 = '💲'
            } else if(tickBS2 < 25) {
                var BS2 = '💷'
            } else if(tickBS2 < 37.5) {
                var BS2 = '💵'
            } else if(tickBS2 < 50) {
                var BS2 = '💴'
            } else if(tickBS2 < 62.5) {
                var BS2 = '💸'
            } else if(tickBS2 < 75){
                var BS2 = '💰'
            } else if(tickBS2 < 87.5) {
                var BS2 = '💳'
            } else {
                var BS2 = '🤑'
            }
        
            var tickBS3 = Math.random() * 100;
            if(tickBS3 < 12.5) {
                var BS3 = '💲'
            } else if(tickBS3 < 25) {
                var BS3 = '💷'
            } else if(tickBS3 < 37.5) {
                var BS3 = '💵'
            } else if(tickBS3 < 50) {
                var BS3 = '💴'
            } else if(tickBS3 < 62.5) {
                var BS3 = '💸'
            } else if(tickBS3 < 75){
                var BS3 = '💰'
            } else if(tickBS3 < 87.5) {
                var BS3 = '💳'
            } else {
                var BS3 = '🤑'
            }
        
            var tickBS4 = Math.random() * 100;
            if(tickBS4 < 12.5) {
                var BS4 = '💲'
            } else if(tickBS4 < 25) {
                var BS4 = '💷'
            } else if(tickBS4 < 37.5) {
                var BS4 = '💵'
            } else if(tickBS4 < 50) {
                var BS4 = '💴'
            } else if(tickBS4 < 62.5) {
                var BS4 = '💸'
            } else if(tickBS4 < 75){
                var BS4 = '💰'
            } else if(tickBS4 < 87.5) {
                var BS4 = '💳'
            } else {
                var BS4 = '🤑'
            }
        
            var tickBS5 = Math.random() * 100;
            if(tickBS5 < 12.5) {
                var BS5 = '💲'
            } else if(tickBS5 < 25) {
                var BS5 = '💷'
            } else if(tickBS5 < 37.5) {
                var BS5 = '💵'
            } else if(tickBS5 < 50) {
                var BS5 = '💴'
            } else if(tickBS5 < 62.5) {
                var BS5 = '💸'
            } else if(tickBS5 < 75){
                var BS5 = '💰'
            } else if(tickBS5 < 87.5) {
                var BS5 = '💳'
            } else {
                var BS5 = '🤑'
            }
        
            var tickBS6 = Math.random() * 100;
            if(tickBS6 < 12.5) {
                var BS6 = '💲'
            } else if(tickBS6 < 25) {
                var BS6 = '💷'
            } else if(tickBS6 < 37.5) {
                var BS6 = '💵'
            } else if(tickBS6 < 50) {
                var BS6 = '💴'
            } else if(tickBS6 < 62.5) {
                var BS6 = '💸'
            } else if(tickBS6 < 75){
                var BS6 = '💰'
            } else if(tickBS6 < 87.5) {
                var BS6 = '💳'
            } else {
                var BS6 = '🤑'
            }
        
            var tickBS7 = Math.random() * 100;
            if(tickBS7 < 12.5) {
                var BS7 = '💲'
            } else if(tickBS7 < 25) {
                var BS7 = '💷'
            } else if(tickBS7 < 37.5) {
                var BS7 = '💵'
            } else if(tickBS7 < 50) {
                var BS7 = '💴'
            } else if(tickBS7 < 62.5) {
                var BS7 = '💸'
            } else if(tickBS7 < 75){
                var BS7 = '💰'
            } else if(tickBS7 < 87.5) {
                var BS7 = '💳'
            } else {
                var BS7 = '🤑'
            }
        
        var useTicketBS = new Discord.RichEmbed()
            .setAuthor('Lottery Ticket')
            .setColor(15844367)
            .setDescription('Big Spenderz')
            .addField('**Good Luck!**', `Winning Symbol: \n||${BS1}||\n------------------\n| ||${BS2}|| | ||${BS3}|| | ||${BS4}|| |\n------------------\n| ||${BS5}|| | ||${BS6}|| | ||${BS7}|| |\n------------------`)
        
        if(buy === 'big' && lt1 === 'spenderz') {
        
            let symbols = ['💲','💷','💵','💴','💸','💰','💳','🤑']
        
            var ticContents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/big-spenderz.json`)
            var tics = JSON.parse(ticContents)
        
            if(args.length) {
                if(tics == 0) {
                    message.channel.send("You don't have any lottery tickets.")
                    return;
                }
            }
        
            fs.writeFile(`./casino/${message.author.username}/lottery-tickets/big-spenderz.json`, `${tics - 1}`, (err) => {
                if (err) throw err;
            });
        
        message.channel.send(useTicketBS).then((msg) => {
            setTimeout(() => {
        
        if(BS1 == BS2 || BS1 == BS3 || BS1 == BS4 || BS1 == BS5 || BS1 == BS6 || BS1 == BS7) {
            if(BS1 == symbols[0]) {
                let winnings = 5000
                useTicketBS.setFooter(`Winnings: ${winnings}`)
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                msg.edit(useTicketBS)
            }
        
            if(BS1 == symbols[1]) {
                let winnings = 7500
                useTicketBS.setFooter(`Winnings: ${winnings}`)
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                msg.edit(useTicketBS)
            }
        
            if(BS1 == symbols[2]) {
                let winnings = 10000
                useTicketBS.setFooter(`Winnings: ${winnings}`)
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                msg.edit(useTicketBS)
            }
        
            if(BS1 == symbols[3]) {
                let winnings = 20000
                useTicketBS.setFooter(`Winnings: ${winnings}`)
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                msg.edit(useTicketBS)
            }
        
            if(BS1 == symbols[4]) {
                let winnings = 30000
                useTicketBS.setFooter(`Winnings: ${winnings}`)
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                msg.edit(useTicketBS)
            }
        
            if(BS1 == symbols[5]) {
                let winnings = 40000
                useTicketBS.setFooter(`Winnings: ${winnings}`)
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                msg.edit(useTicketBS)
            }
        
            if(BS1 == symbols[6]) {
                let winnings = 50000
                useTicketBS.setFooter(`Winnings: ${winnings}`)
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                msg.edit(useTicketBS)
            }
        
            if(BS1 == symbols[7]) {
                let winnings = 100000
                useTicketBS.setFooter(`Winnings: ${winnings}`)
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                msg.edit(useTicketBS)
            }
        
        } else if(BS1 != BS2 || BS1 != BS3 || BS1 != BS4 || BS1 != BS5 || BS1 != BS6 || BS1 != BS7) {
            setTimeout(() => {
                useTicketBS.setFooter('Loser!')
                msg.edit(useTicketBS)
            }, 5000)
        };
        }, 3000)
        });
        };
            }
        }