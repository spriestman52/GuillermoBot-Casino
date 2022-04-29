const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'dice',
    description: 'dice',
    execute(message, args) {

        var contents = fs.readFileSync(`./casino/${message.author.username}/credits.json`)
        var walletContent = JSON.parse(contents)

        let roll = Math.floor((Math.random() * 6) + 1);
        let call = args[0]
        let guess = args[1]
        let bet = args[2]

        parseInt(roll);
        parseInt(bet);

    if(call == 'roll') {
        if(bet > walletContent) {
            message.channel.send('You do not have enough credits.')
            return;
        }
        if(!args.length) {
            message.channel.send('Please place a valid bet and guess.')
            return;

        } else if(isNaN(bet)) {
            message.channel.send('Please place a number bet.')
            return;

        } else if(isNaN(guess)) {
            message.channel.send('Please make a number guess.')
            return;

        } else if(guess <= 0 || guess > 6) {
            message.channel.send('Please make a guess between 1 and 6')
            return;
        };

        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - bet}`)

        var diceRoll = new Discord.RichEmbed()
        .setAuthor("Dice Roll")
        .setImage("https://c.tenor.com/c-bGYMHqlwkAAAAC/roll-the-dice.gif")
        .setColor('#FFFFFF')

        var diceRollend = new Discord.RichEmbed()
        .setAuthor("Dice Roll")
        .setColor('#FFFFFF')

        let winnings = bet * 6

        if(guess == roll) {
            message.channel.send(diceRoll).then((msg) => {
                setTimeout(() => {
                    diceRollend.setDescription(`Winner!`)
                    diceRollend.setFooter(`Winnings: ${winnings}`)
                    msg.edit(diceRollend)
                }, 3000)
            });
            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
            return;
        };

        if(guess !== roll) {
            message.channel.send(diceRoll).then((msg) => {
                setTimeout(() => {
                    diceRollend.setDescription(`Loser! The dice rolled a ${roll}.`)
                    msg.edit(diceRollend)
                }, 3000)
            });
        };

    }

    }
}