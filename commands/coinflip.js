const Discord = require('discord.js');

module.exports.run = async (bot,message, args) => {
    let answers = [
        'heads',
        'tails',
        'heads',
        'tails',
        'heads',
        'tails',
        'heads',
        'tails',
        'heads',
        'tails'
    ];
    let coinembed = new Discord.RichEmbed()
    .setTitle("Coin Flipped")
    .setAuthor(`${message.author.username}`)
    .setColor("#DAA520")
    .setFooter(`Would you like to get a coin now ${message.author.username}?`)
    .addField('CoinFlip', `${answers[~~(Math.random() * answers.length)]}`);
    message.channel.send(coinembed).then(msg => {msg.delete(5000)});
};
module.exports.help = {
  name: "coinflip",
  category: "Fun",
  description: "Flips a coin.",
  usage: ">coinflip"
};