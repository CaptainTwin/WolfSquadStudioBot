const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  message.delete();
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
             if(!bUser) return message.channel.send("Couldn't find user.");
             let bReason = args.join(" ").slice(22);
             if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned.");
             let banEmbed = new Discord.RichEmbed()
             .setDescription("~BAN!~")
             .setColor("#820000")
             .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
             .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
             .addField("Banned In", message.channel)
             .addField("Time", message.createdAt)
             .addField("Reason", bReason)
             .setTimestamp();

             let banChannel = message.guild.channels.find(`name`, "incidents");
             if(!banChannel) return message.channel.send("Couldn't find the incidents channel.");

             message.guild.member(bUser).ban(bReason)
             banChannel.send(banEmbed);

};

module.exports.help = {
  name: "ban",
  category: "Moderation",
  description: "Bans a user from the guild.",
  usage: ">ban [@user] [reason here]"
};