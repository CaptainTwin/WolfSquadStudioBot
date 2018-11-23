const Discord = require("discord.js");
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '357555941215961099') return message.channel.send('Sorry, you don\'t have permission to create poll!').then(msg => msg.delete({timeout: 10000}));
  if (!args.join(' ')) return message.channel.send('Usage: poll <title>').then(msg => msg.delete({timeout: 10000}));
  let pollchannel = message.guild.channels.find('name', "polls");
  
  const embed = new Discord.RichEmbed()
    .setDescription(args.join(' '))
    .setFooter(`Poll started by ${message.author.tag} - ${moment(message.createdAt).format(`MMMM Do YYYY`)}`)
    .setColor('#7289DA');
  
  let pollsend = await pollchannel.send(embed);
    await pollsend.react(`✅`);
    await pollsend.react(`❌`);
};

module.exports.help = {
name: "poll"
}