const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let member = message.mentions.users.first();
if(!member) return message.reply("Choose a member to shoot!");
let shotembed = new Discord.RichEmbed()
.setTitle("**Shot**")
.setDescription(`${message.author.username} shot ${member.username}`)
.setImage('https://stayhunting.com/wp-content/uploads/2017/04/how-to-shoot-a-pistol.jpg')
message.channel.send(shotembed);

}

module.exports.help = {
name: "shoot"
}