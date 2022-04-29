const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'coin flip',
    description: 'coin flip',
    execute(message, args) {

        var contents = fs.readFileSync(`./casino/${message.author.username}/credits.json`)
        var walletContent = JSON.parse(contents)

        let flip = Math.floor((Math.random() * 100) + 1)

        let guess = args[0]
        let bet = args[1]

        parseInt(bet);

        if(bet > walletContent) {
            message.channel.send('You do not have enough credits.')
            return;
        };

        if(!args.length) {
            message.channel.send('Please place a valid bet and guess.')
            return;
        };

        if(isNaN(bet)) {
            message.channel.send('Please place a number bet.')
            return;
        };

        if(guess != 'heads' && guess != 'tails') {
            message.channel.send('Please guess heads or tails.')
            return;
        };

        fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent - bet}`)

        var coinflip = new Discord.RichEmbed()
        .setAuthor('Coin Flip')
        .setImage('https://c.tenor.com/tewn7lzVDgcAAAAC/coin-flip-flip.gif')
        .setColor('#95A5A6')

        var coinflipEnd = new Discord.RichEmbed()
        .setAuthor('Coin Flip')
        .setColor('#95A5A6')

        let winnings = bet * 2

        message.channel.send(coinflip).then((msg) => {
            setTimeout(() => {

            //Heads
    if(guess == 'heads' || guess == 'tails') {

        if(flip <= 50 && guess == 'heads') {
            coinflipEnd.setDescription('Winner!')
            coinflipEnd.setFooter(`Winnings: ${winnings}`)
            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
            msg.edit(coinflipEnd)
            return;

        } else if(flip <= 50 && guess == 'tails') {
            coinflipEnd.setDescription('Loser!')
            msg.edit(coinflipEnd)
            return;
        };
        

            //Tails
        if(flip > 50 && guess == 'tails') {
            coinflipEnd.setDescription('Winner!')
            coinflipEnd.setFooter(`Winnings: ${winnings}`)
            fs.writeFileSync(`./casino/${message.author.username}/credits.json`, `${walletContent + winnings}`)
            msg.edit(coinflipEnd)
            return;

        } else if(flip > 50 && guess == 'heads'){
            coinflipEnd.setDescription('Loser!')
            msg.edit(coinflipEnd)
            return;
        }
    };
    }, 3000)

});

    }
}