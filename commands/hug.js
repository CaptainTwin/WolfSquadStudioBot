const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("SEND_MESSAGES")) return errors.noPerms(message, "SEND_MESSAGES");
    if(args[0] == "help"){
      message.reply("Usage: >hug <user>");
      return;
    }

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.channel.send(`${message.author.username} hugged ${member.user.username}!`);
    member.send("Someone gave you a hug!");

}

module.exports.help = {
    name: "hug",
    category: "Fun",
    description: "Hugs a tagged user.",
    usage: ">hug"
  };