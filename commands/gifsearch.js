const botconfig = require("../botconfig.json");    
const Discord = require("discord.js");
const gifSearch = require("gif-search");
const prefix = botconfig.prefix;

module.exports.run = (bot, message, args) => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

    if (!args[0]) return message.channel.send("`"+prefix+"gif <gname>`");

    gifSearch.random(args[0]).then(
        gifUrl => {

        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var memeembed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl)
        .setTimestamp();
        message.author.send(memeembed);
    });

    message.channel.send(`<@${message.author.id}> **check your dm!** :postbox:`);

}

module.exports.help = {
  name: "gifsearch",
  category: "Fun",
  description: "Gives you a meme based on what you searced for.",
  usage: ">gifsearch [word here]"
};