const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const client = new Discord.Client();
const channel = new Discord.Channel(client);

//Plug-Ins
const fs = require('fs');

//Sets
const dailyspin = new Set()

//Config
const config = require('./json/config.json');

//Bot Settings
client.on('ready', () =>{
    console.log('GuillermoBot is online!');
    client.user.setActivity(",help")


//Replace All
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
    };

});
client.on ('message', message => {

    user = message.member
    user = toString();
    msg = message.content.toLowerCase();

    

                    //Casino

            let args = message.content.slice(config.prefix.length).split(' ');
            let command = args.shift().toLowerCase();

            var contents = fs.readFileSync(`./casino/${message.author.username}/credits.json`)
            var walletContent = JSON.parse(contents)

            //Help
            if(msg.startsWith(config.prefix +'casino-help')) {
                var casinoHelp = new Discord.RichEmbed()
                .setTitle('Casino Help')
                .setColor(15844367)
                .addField('**,casino**', 'Start playing at the casino')
                .addField('**,wallet**', 'Check your credits')
                .addField('**,blackjack <bet>**', 'Play Blackjack')
                .addField('**,slots <bet>**', 'Play Slots')
                .addField('**,roulette <bet>**', 'Play Roulette')
                .addField('**,lt-help**', 'Lottery ticket help')
                message.channel.send(casinoHelp)
            } else {
    

            //Join Casino
            if(msg.startsWith(config.prefix +'casino')) {

                if(fs.existsSync(`./casino/${message.author.username}/credits.json`)) {
                message.channel.send("You're already in the Casino!")
                    return;
                }
                var credits = 1000
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
            } else {


                //Wallet
            if(msg.startsWith(config.prefix +'wallet')) {
                message.channel.send(`You currently have ${walletContent} credits`)
            } else {



                //Blackjack

            if(command === 'blackjack') {
    
                let K = 10
                let J = 10
                let Q = 10
                let A = 11
                let bet = args[0]
                parseInt(bet);

                if(bet > walletContent) {
                    message.channel.send('You do not have enough credits.')
                    return;
                }
                if(!args.length) {
                    message.channel.send('Please place a bet.')
                    return;
    
                } else if (isNaN(bet)) {
                    message.channel.send('Please place a number bet.')
                    return;
                } else {

                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - bet}`)
    
                function getCard(suits, cards, deck, cardsUsed) {
                    var randomCard = suits[Math.floor(Math.random() * suits.length)] + cards[Math.floor(Math.random() * cards.length)];
                    while (cardsUsed.includes(randomCard)) { // if the passed in deck of cards already contains card, then keep on rolling a new card
                        randomCard = suits[Math.floor(Math.random() * suits.length)] + cards[Math.floor(Math.random() * cards.length)];
                    }
                    cardsUsed.push(randomCard);
                    deck.push(randomCard);
                    return randomCard;
                }
    
    
                function createString(deck) {
                    var result = ""
                    for (var card of deck) {
                        result += card;
                    }
                    return result;
                }
    
    
                function getScore(deck) {
                    try {
                        var sum = 0;
                        for (var card of deck) {
                            card = card.split(/[♣️♦️♥️♠️]+/);
                            sum += parseInt(card[1]);
                        }
                        return sum;
                    } catch (error) {
                        if (error instanceof TypeError) {
                            return 0;
                        }
                    }
                }
                
                function blackjackGameLogic(playerBlackjack, msg, choice) {
                    playerBlackjack = new Discord.RichEmbed();
                    playerBlackjack.setAuthor('BLACKJACK');
                    playerBlackjack.addField(`Dealer's Hand`, `${createString(dealerCards)} | Total: ${getScore(dealerCards)}`);
                    playerBlackjack.addField(`Your Hand`, `${createString(playerCards)} | Total: ${getScore(playerCards)}`);
    
    
                    if (getScore(playerCards) == 21) {
                        if (getScore(dealerCards) != 21) {
                            playerBlackjack.setFooter("You WON!");
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + (bet * 2)}`)
                        } else {
                            playerBlackjack.setFooter("PUSH!");
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + bet}`)
                        }
                        gameOver = true;
                    }
    
                    if (getScore(playerCards) <= 21) {
                        if (((getScore(playerCards) > getScore(dealerCards)) && (choice == '🇸' || choice =='🇩')) || 
                                    getScore(dealerCards) > 21) {
                            playerBlackjack.setFooter("You WON!");
                            bet = choice == '🇩' ? bet * 4 : bet * 2;
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + bet}`)
                            gameOver = true;
                        }
                    }
                    if ((getScore(playerCards) < getScore(dealerCards) && getScore(dealerCards) <= 21) && (choice == '🇸' || choice == '🇩')
                                || getScore(playerCards) > 21) {
                        playerBlackjack.setFooter("You LOST!");
    
                        gameOver = true;
                    }
                    if (getScore(playerCards) == getScore(dealerCards)) {
                        playerBlackjack.setFooter("PUSH!");
                        bet = choice == '🇩' ? bet * 2 : bet * 2;
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + bet}`)
    
                        gameOver = true;
                    }
                    msg.edit(playerBlackjack);
                }
    
    
                let cardsGiven = []
                let playerCards = []
                let dealerCards = []
    
                let suits = ['♣️', '♦️', '♥️', '♠️']
                let cards = [A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2,]
    
    
                        //Game
                        
                    // Give initial cards
                    getCard(suits, cards, dealerCards, cardsGiven);
                    for (var i = 0; i < 2; i++) { 
                        getCard(suits, cards, playerCards, cardsGiven);
                    }
    
                    var gameOver = false
                    var playerBlackjack = new Discord.RichEmbed()
                    .setAuthor('BLACKJACK')
                    .addField(`Dealer's Hand`, `${createString(dealerCards)} | Total: ${getScore(dealerCards)}`)
                    .addField(`Your Hand`, `${createString(playerCards)} | Total: ${getScore(playerCards)}`);
    
                        //Player and Dealer Blackjack
                    if (getScore(playerCards) == 21) {
    
                    var playerBlackjack = new Discord.RichEmbed()
                    .setAuthor('BLACKJACK')
                    .addField(`Dealer's Hand`, `${createString(dealerCards)}`)
                    .addField(`Your Hand`, `${createString(playerCards)}`)
                    message.channel.send(playerBlackjack)
                        .then(msg => {
                    
                    if (getScore(dealerCards) != 21) {
                        playerBlackjack.setFooter("YOU WON")
    
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + (bet * 2.5)}`)
    
                        
                    
                        msg.edit(playerBlackjack)
                        return;
                    
                    } else {
                        playerBlackjack.setFooter("PUSH")
    
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + bet}`)
    
                        msg.edit(playerBlackjack)
                        return;
                        };
                    });
                        return;
                        };
                    
                    message.channel.send(playerBlackjack).then(msg => {
                        msg.react('🇭').then( r => {
                            msg.react('🇸').then( r => {
                                msg.react('🇵').then( r => {
                                    msg.react('🇩')
    
                            const hit = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id;
                            const stand = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
                            const split = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
                            const double = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
    
                            const hit1 = msg.createReactionCollector(hit, {timer: 6000});
                            const stand1 = msg.createReactionCollector(stand, {timer: 6000});
                            const split1 = msg.createReactionCollector(split, {timer: 6000});
                            const double1 = msg.createReactionCollector(double, {timer: 6000});
            
                            //Hit
                            hit1.on('collect', r => {
                                r.remove(r.users.filter(u => u === message.author).first());
                                if (!gameOver) {
                                    getCard(suits, cards, playerCards, cardsGiven);
                                    if (getScore(playerCards) == 21) {
                                        while (true) {
                                            if (getScore(dealerCards) >= 17 && getScore(dealerCards) <= 20) {
                                                break;
                                            } else if (getScore(dealerCards) >= 21) {
                                                break;
                                            } else {
                                                getCard(suits, cards, dealerCards, cardsGiven);
                                            }
                                        }
                                    }
                                    blackjackGameLogic(playerBlackjack, msg, '🇭');
                                }
                            });
                                                            
                            //Stand
                            stand1.on('collect', r => {
                                r.remove(r.users.filter(u => u === message.author).first());
                                if (!gameOver) {
                                    while (true) {
                                        if (getScore(dealerCards) >= 17 && getScore(dealerCards) <= 20) {
                                            break;
                                        } else if (getScore(dealerCards) >= 21) {
                                            break;
                                        } else {
                                            getCard(suits, cards, dealerCards, cardsGiven);
                                        }
                                    }
                                    blackjackGameLogic(playerBlackjack, msg, '🇸');
                                }
                            });
                                                    
                            //Split
                            split1.on('collect', r => {
                                r.remove(r.users.filter(u => u === message.author).first());
                            });
    
                            //Double Down
                            double1.on('collect', r => {
                            r.remove(r.users.filter(u => u === message.author).first());
                            
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - bet}`)
                            
                            getCard(suits, cards, playerCards, cardsGiven);
    
                            if (getScore(playerCards) <= 21) {
                                while (true) {
                                    if (getScore(dealerCards) >= 17 && getScore(dealerCards) <= 20) {
                                        break;
                                    } else if (getScore(dealerCards) >= 21) {
                                        break;
                                    } else {
                                        getCard(suits, cards, dealerCards, cardsGiven);
                                    }
                                }
                            }
                            blackjackGameLogic(playerBlackjack, msg, '🇩');
                        });
    
                            })
                        })
                    })
    
                 });
                };
                } else {
    

                  //Daily Spin
            if(msg.startsWith(config.prefix +'dailyspin')) {
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
            } else {
    

            };
        };
    };

                    //Slots

                //Slots Help
                if(msg.startsWith(config.prefix +'slots-help')) {
                    var slotsHelp = new Discord.RichEmbed()
                    .setAuthor('Slot Machine')
                    .setColor(15844367)
                    .addField('**Winnings**', '🍉🍉❔ - **.5x**\n🍒🍒❔ - **1x**\n🔔🔔❔ - **2x**\n🍉🍉🍉 - **2.5x**\n🍒🍒🍒 - **3x**\n💰💰❔ - **4x**\n🔔🔔🔔 - **5x**\n💰💰💰 - **10x**\n💎💎❔ - **15x**\n💎💎💎 - **20x**')
                    .addField('Usage', '**,slots <bet>**')
                    message.channel.send(slotsHelp)
                } else {

                    //Slots Game
                    let args = message.content.slice(config.prefix.length).split(' ');
                    let command = args.shift().toLowerCase();

                if(command === 'slots') {

                    let bet = args[0]
                    parseInt(bet)


                    if(bet > walletContent) {
                        message.channel.send('You do not have enough credits.')
                        return;
                    }
                    if(!args.length) {
                        message.channel.send('Please place a valid bet.')
                        return;
                    } else if(isNaN(bet)) {
                        message.channel.send('Please place a number bet.')
                        return;
                    }

                    fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - bet}`)
                        //Slots Symbol
                    var slotsSymbol1 = Math.random() * 100;
                        if(slotsSymbol1 < 20) {
                            var sS1 = '🍉'
                        } else if(slotsSymbol1 < 40) {
                            var sS1 = '🍒'
                        } else if(slotsSymbol1 < 60) {
                            var sS1 = '🔔'
                        } else if(slotsSymbol1 < 80) {
                            var sS1 = '💰'
                        } else {
                            var sS1 = '💎'
                        }

                    var slotsSymbol2 = Math.random() * 100;
                        if(slotsSymbol2 < 20) {
                            var sS2 = '🍉'
                        } else if(slotsSymbol2 < 40) {
                            var sS2 = '🍒'
                        } else if(slotsSymbol2 < 60) {
                            var sS2 = '🔔'
                        } else if(slotsSymbol2 < 80) {
                            var sS2 = '💰'
                        } else {
                            var sS2 = '💎'
                        }

                    var slotsSymbol3 = Math.random() * 100;
                        if(slotsSymbol3 < 20) {
                            var sS3 = '🍉'
                        } else if(slotsSymbol3 < 40) {
                            var sS3 = '🍒'
                        } else if(slotsSymbol3 < 60) {
                            var sS3 = '🔔'
                        } else if(slotsSymbol3 < 80) {
                            var sS3 = '💰'
                        } else {
                            var sS3 = '💎'
                        }

                        var slotsSymbol4 = Math.random() * 100;
                        if(slotsSymbol4 < 20) {
                            var sS4 = '🍉'
                        } else if(slotsSymbol4 < 40) {
                            var sS4 = '🍒'
                        } else if(slotsSymbol4 < 60) {
                            var sS4 = '🔔'
                        } else if(slotsSymbol4 < 80) {
                            var sS4 = '💰'
                        } else {
                            var sS4 = '💎'
                        }

                    var slotsSymbol5 = Math.random() * 100;
                        if(slotsSymbol5 < 20) {
                            var sS5 = '🍉'
                        } else if(slotsSymbol5 < 40) {
                            var sS5 = '🍒'
                        } else if(slotsSymbol5 < 60) {
                            var sS5 = '🔔'
                        } else if(slotsSymbol5 < 80) {
                            var sS5 = '💰'
                        } else {
                            var sS5 = '💎'
                        }

                    var slotsSymbol6 = Math.random() * 100;
                        if(slotsSymbol6 < 20) {
                            var sS6 = '🍉'
                        } else if(slotsSymbol6 < 40) {
                            var sS6 = '🍒'
                        } else if(slotsSymbol6 < 60) {
                            var sS6 = '🔔'
                        } else if(slotsSymbol6 < 80) {
                            var sS6 = '💰'
                        } else {
                            var sS6 = '💎'
                        }

                        var slotsSymbol7 = Math.random() * 100;
                        if(slotsSymbol7 < 30) {
                            var sS7 = '🍉'
                        } else if(slotsSymbol7 < 50) {
                            var sS7 = '🍒'
                        } else if(slotsSymbol7 < 70) {
                            var sS7 = '🔔'
                        } else if(slotsSymbol7 < 90) {
                            var sS7 = '💰'
                        } else {
                            var sS7 = '💎'
                        }

                        var slotsSymbol8 = Math.random() * 100;
                        if(slotsSymbol8 < 30) {
                            var sS8 = '🍉'
                        } else if(slotsSymbol8 < 60) {
                            var sS8 = '🍒'
                        } else if(slotsSymbol8 < 80) {
                            var sS8 = '🔔'
                        } else if(slotsSymbol8 < 95) {
                            var sS8 = '💰'
                        } else {
                            var sS8 = '💎'
                        }

                        var slotsSymbol9 = Math.random() * 100;
                        if(slotsSymbol9 < 30) {
                            var sS9 = '🍉'
                        } else if(slotsSymbol9 < 60) {
                            var sS9 = '🍒'
                        } else if(slotsSymbol9 < 80) {
                            var sS9 = '🔔'
                        } else if(slotsSymbol9 < 95) {
                            var sS9 = '💰'
                        } else {
                            var sS9 = '💎'
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
                    if(sS7 + sS8 == '🍉🍉' || sS8 + sS9 == '🍉🍉' || sS7 + sS8 + sS9 == '🍉🍉🍉') {
                        if(sS7 + sS8 == '🍉🍉' || sS8 + sS9 == '🍉🍉') {
                            let winnings = bet * .5
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if(sS7 + sS8 + sS9 == '🍉🍉🍉') {
                            let winnings = bet * 2.5
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        msg.edit(slotGame4)


                    } else if(sS7 + sS8 == '🍒🍒' || sS8 + sS9 == '🍒🍒' || sS7 + sS8 + sS9 == '🍒🍒🍒') {
                        if(sS7 + sS8 == '🍒🍒' || sS8 + sS9 == '🍒🍒') {
                            let winnings = bet * 1
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if(sS7 + sS8 + sS9 == '🍒🍒🍒') {
                            let winnings = bet * 3
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        msg.edit(slotGame4)


                    } else if(sS7 + sS8 == '🔔🔔' || sS8 + sS9 == '🔔🔔' || sS7 + sS8 + sS9 == '🔔🔔🔔') {
                        if(sS7 + sS8 == '🔔🔔' || sS8 + sS9 == '🔔🔔') {
                            let winnings = bet * 2
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if(sS7 + sS8 + sS9 == '🔔🔔🔔') {
                            let winnings = bet * 5
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        msg.edit(slotGame4)
                        

                    } else if(sS7 + sS8 == '💰💰' || sS8 + sS9 == '💰💰' || sS7 + sS8 + sS9 == '💰💰💰') {
                        if(sS7 + sS8 == '💰💰' || sS8 + sS9 == '💰💰') {
                            let winnings = bet * 4
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if (sS7 + sS8 + sS9 == '💰💰💰') {
                            let winnings = bet * 10
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        msg.edit(slotGame4)


                    } else if(sS7 + sS8 == '💎💎' || sS8 + sS9 == '💎💎' || sS7 + sS8 + sS9 == '💎💎💎') {
                        if(sS7 + sS8 == '💎💎' || sS8 + sS9 == '💎💎') {
                            let winnings = bet * 15
                            slotGame4.setFooter(`Winnings: ${winnings}`)
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
                        }
                        if(sS7 + sS8 + sS9 == '💎💎💎') {
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
} else {



        //Lottery Tickets

    
//Lottery Tickets Help
if(msg.startsWith(config.prefix + 'lt-help')) {

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
} else {

        //Lottery Tickets Buy
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();

if(command === 'lt') {

    let buy = args[0]
    let lt1 = args[1]
    let lt2 = args[2]
    let amount = args[3]
    parseInt(amount);
    

    if(command === 'lt' && buy === 'buy') {

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

        var ticContents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/loose-change.json`)
        var tics = JSON.parse(ticContents)
        fs.writeFile(`./casino/${message.author.username}/lottery-tickets/loose-change.json`, `${tics - 1}`, (err) => {
            if (err) throw err;
        });

        message.channel.send(useTicketLC)
        var winner = +LC1 + +LC2 + +LC3 + +LC4 + +LC5 + +LC6
            if(winner >= 1.00) {
                var ltCredsW = Math.random() * 100;
                    if(ltCredsW < 50) {
                        var ltCreds = 100;
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                            setTimeout(() => {
                                message.channel.send(`Winner! ${ltCreds} credits have been added to your wallet.`)
                            }, 5000)
                            return;
                    } else if(ltCredsW < 80) {
                        var ltCreds = 250;
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                            setTimeout(() => {
                                message.channel.send(`Winner! ${ltCreds} credits have been added to your wallet.`)
                            }, 5000)
                            return;
                    } else if(ltCredsW < 95) {
                        var ltCreds = 400;
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                            setTimeout(() => {
                                message.channel.send(`Winner! ${ltCreds} credits have been added to your wallet.`)
                            }, 5000)
                            return;
                    } else {
                        var ltCreds = 1000;
                        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                            setTimeout(() => {
                                message.channel.send(`Winner! ${ltCreds} credits have been added to your wallet.`)
                            }, 5000)
                        }
            } else if(winner < 1.00) {
                setTimeout(() => {
                    message.channel.send(`Loser!`)
                }, 5000)
                    };
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

        var ticContents = fs.readFileSync(`./casino/${message.author.username}/lottery-tickets/winter-wonderland.json`)
        var tics = JSON.parse(ticContents)
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
    }, 5000)
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

    message.channel.send(useTicketGF)
    if(GF1 == GF2 || GF1 == GF3 || GF1 == GF4 || GF1 == GF5 || GF1 == GF6 || GF1 == GF7) {
        var ltCredsW = Math.random() * 100;
            if(ltCredsW < 50) {
                var ltCreds = 1000;
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                    setTimeout(() => {
                        message.channel.send(`Winner! ${ltCreds} credits have been added to your wallet.`)
                    }, 5000)
                    return;
            } else if(ltCredsW < 80) {
                var ltCreds = 2500;
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                    setTimeout(() => {
                        message.channel.send(`Winner! ${ltCreds} credits have been added to your wallet.`)
                    }, 5000)
                    return;
            } else if(ltCredsW < 95) {
                var ltCreds = 4000;
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                    setTimeout(() => {
                        message.channel.send(`Winner! ${ltCreds} credits have been added to your wallet.`)
                    }, 5000)
                    return;
            } else {
                var ltCreds = 10000;
                fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + +ltCreds}`)
                    setTimeout(() => {
                        message.channel.send(`Winner! ${ltCreds} credits have been added to your wallet.`)
                    }, 5000)
                }
    } else if(GF1 != GF2 || GF1 != GF3 || GF1 != GF4 || GF1 != GF5 || GF1 != GF6 || GF1 != GF7) {
        setTimeout(() => {
            message.channel.send(`Loser!`)
        }, 5000)
            };
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
}, 5000)
});
};

    };
    //Roulette

if(command === 'roulette') {

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

};
};
                };
                };
            };
        };
});
client.login(config.token);