const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let member = message.mentions.users.first();
if(!member) return message.reply("Choose a member to throw a snowball to!");
let snowballembed = new Discord.RichEmbed()
.setTitle("Snowballed")
.setDescription(`${message.author.username} Hit ${member.username} with a snowball!`)
.setFooter(`Would you like revenge ${member.username}?`)
.setTimestamp()
.setImage(`https://thumbs.dreamstime.com/b/snowball-close-up-photo-sunlight-35681571.jpg`);

message.channel.send(snowballembed);
};

module.exports.help = {
name: "snowball"
}