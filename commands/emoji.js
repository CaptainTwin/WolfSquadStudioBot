const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    try {

        let emojis;
        if (message.guild.emojis.size === 0) emojis = 'There are no emojis on this server.';
        else emojis = `**Emojis for ${message.guild.name}**\n${message.guild.emojis.map(e => e).join(' ')}`;
        message.channel.send(emojis).then(msg => {msg.delete(5000)});;

    } catch (err) {

        message.channel.send(`**${err.name}: ${err.message}**`)
    }
}

module.exports.help = {
  name: "emoji",
  category: "Miscelaneous",
  description: "Shows the custom emoji's of the server!",
  usage: ">emoji"  
};