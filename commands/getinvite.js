const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "372995308814073856") return;
    let sv = bot.guilds.get(args[0])
    if (!sv) return message.channel.send(`Enter a valid guild id`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()));

}

module.exports.help = {
    name: "getinvite"
}