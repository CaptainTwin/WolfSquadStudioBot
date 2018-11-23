const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;


module.exports.run = async (bot, message, args) => {
  message.delete();
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't do that.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.member;
  if(!wUser) return message.reply("Use a member!");
  if(!warns[wUser.user.username, message.guild.name]){
      warns[wUser.user.username, message.guild.name] = {
          warns: 0
      };
  }
  let warnlevel = warns[wUser.user.username, message.guild.name].warns;
  
  let wicon = message.guild.iconURL;
  let warnlevelembed = new Discord.RichEmbed()
  .setTitle("Warn Level")
  .setColor(orange)
  .setThumbnail(wicon)
  .setFooter(`Behave yourselves ${wUser.user.username}`)
  .setTimestamp()
  .addField("Amount of Warnings", warnlevel, true)
  .addField("Warnlevel of User", wUser, true);
  message.channel.send(warnlevelembed);
}

module.exports.help = {
  name: "warnlevel",
  category: "Moderation",
  description: "Shows the current amount of warns of the mentioned user.",
  usage: ">warnlevel [@user]"
};