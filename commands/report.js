const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: >report <user> <reason>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
             if(!rUser) return message.channel.send("Couldn't find user.");
             let reason = args.join(" ").slice(22);

             let reportEmbed = new Discord.RichEmbed()
             .setDescription("Description")
             .setColor("#dd1c1c")
             .setTimestamp()
             .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
             .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
             .addField("Channel", message.channel)
             .addField("Time", message.createdAt)
             .addField("Reason", reason);

             let reportschannel = message.guild.channels.find(`name`, "reports");
             if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


             message.delete().catch(O_o=>{});
             reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "report",
  category: "Miscelaneous",
  description: "Reports a user so the admins can mute, kick, softban or ban him.",
  usage: ">report [@user] [reason here]"
};