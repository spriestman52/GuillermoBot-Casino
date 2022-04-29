const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'blackjack',
    description: 'blackjack',
    execute(message, args) {

        var contents = fs.readFileSync(`./casino/${message.author.username}/credits.json`)
        var walletContent = JSON.parse(contents)

        //Blackjack
        
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

                            if(playerCards[0] == playerCards[1]) {
                            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - bet}`)
                            playerBlackjack.addField(`Your Hand`, `${createString(playerCards[1])} | Total: ${getScore(playerCards)[1]}`);
                            message.channel.send(playerBlackjack)
                            } else {
                                message.channel.send('You cannot split')
                            }
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
    }
}
