const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot,message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: >kick <user> <reason>");
      return;
    }
    message.delete();
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
             if(!kUser) return message.channel.send("Couldn't find user.");
             let kReason = args.join(" ").slice(22);
             if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This person can't be kicked due to MANAGE_MESSAGES permissions.");
             if(kUser.hasPermission("MANAGE_SERVER")) return message.channel.send("That person can't be kicked.");

             let kickEmbed = new Discord.RichEmbed()
             .setDescription("~Kick~")
             .setColor("#000000")
             .setTimestamp()
             .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
             .addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
             .addField("Kicked In", message.channel)
             .addField("Time", message.createdAt)
             .addField("Reason", kReason);

             let kickChannel = message.guild.channels.find(`name`, "incidents");
             if(!kickChannel) return message.channel.send("Couldn't find the incidents channel.");


             message.guild.member(kUser).kick(kReason);
              kUser.send(kReason)
             kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: "kick",
  category: "Moderation",
  description: "Kicks a user from the guild.",
  usage: ">kick [@user] [reason here]"
};