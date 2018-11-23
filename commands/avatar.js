const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const errors = require("../utils/errors.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("SEND_MESSAGES")) return errors.noPerms(message, "SEND_MESSAGES");
    if(args[0] == "help"){
      message.reply("Usage: >ban <user> <reason>");
      return;
    }
  message.delete();
  let user = message.mentions.users.first() || message.author;
  let avatarembed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}`)
  .setTitle(`Avatar of ${user.username}!`)
  .setImage(user.displayAvatarURL)
  .setColor("#d604cf")
  .addField("Succes", `Succesfully given you the Avatar of ${user}`)
  .setFooter(`Are you happy now ${message.author.username}?`)
  .setTimestamp();
  message.channel.send(avatarembed)
};

module.exports.help = {
  name: "avatar",
  category: "Miscelaneous",
  description: "Gets a avatar of a user and shows it.",
  usage: ">avatar [@user]"
};