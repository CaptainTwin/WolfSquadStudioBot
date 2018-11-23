const Discord = require('discord.js');

module.exports.run = async (bot,message, args) => {
    let answers = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
    ];
    let diceembed = new Discord.RichEmbed()
    .setTitle("Dice Rolled")
    .setAuthor(`${message.author.username}`)
    .setColor("RANDOM")
    .setFooter(`Would you like to roll again ${message.author.username}?`)
    .addField('You Rolled', `${answers[~~(Math.random() * answers.length)]}`);
    message.channel.send(diceembed).then(msg => {msg.delete(5000)});
};
module.exports.help = {
  name: "diceroll",
  category: "Fun",
  description: "Rolls a dice.",
  usage: ">diceroll"
};