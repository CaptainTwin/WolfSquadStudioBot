const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let member = message.mentions.users.first() || message.member;
  if(!member) return message.reply("Choose a member to give a cake!");

let slapembed = new Discord.RichEmbed()
.setTitle("Cherry cake")
.setDescription(`${message.author.username} gave a cake to ${member.username}`)
.setImage('https://www.sweetandsavorybyshinee.com/wp-content/uploads/2017/08/3-Ingredient-Chocolate-Cherry-Sheet-Cake-3.jpg')
message.channel.send(slapembed)
}

module.exports.help = {
name: "cherrycake",
usage: ">cherrycake [@user]"
}