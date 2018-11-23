const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(`Sorry ${message.author.username} you don\'t have the right permissions!`);
 message.guild.fetchBans()
  .then(bans => message.channel.send({embed: { description: `${message.guild.name} has ${bans.size} bans!`}}))
  .catch(console.error);
  
  message.guild.fetchBans()
  .then(bans => console.log(`The guild ${message.guild.name} has ${bans.size} bans`))
  .catch(console.error);
};   

module.exports.help = {
  name: "bancount"
}