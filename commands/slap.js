const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let member = message.mentions.users.first();
  if(!member) return message.reply("Choose a member to slap!");

let slapembed = new Discord.RichEmbed()
.setTitle("Slap")
.setDescription(`${message.author.username} slapped ${member.username}`)
.setImage('https://orig00.deviantart.net/107e/f/2013/135/d/b/fish_slap_2_by_ibiscorosa-d65djgt.jpg')
.setFooter(`Take revenge pack member ${member.username}`);
message.channel.send(slapembed)
}

module.exports.help = {
name: "slap",
usage: ">slap [@user]"
}