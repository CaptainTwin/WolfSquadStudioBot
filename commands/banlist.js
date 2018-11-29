const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let ban = await message.guild.fetchBans().catch(error => { 
        return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
    });
  
    ban = ban.array();
  
    let possiblebans = [];
    ban.forEach(function(ban) {
         possiblebans.push(`${ban.tag} - ${ban.id}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**BANS**`)
        .setColor(0xCB5A5E)
        .addField(`\`\`\`${message.guild.name}'s banned users!\`\`\``, `\`\`\`${possiblebans.join('\n')}\`\`\``)
        .setTimestamp();
  
  let bansize = await message.guild.fetchBans().then(
bans => embed.setFooter(`${message.guild.name} currently has ${bans.size} banned users!`));
  message.channel.send(embed);
}

module.exports.help = {
  name: "banlist"
}