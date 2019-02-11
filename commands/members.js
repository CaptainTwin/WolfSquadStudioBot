const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let members = await message.guild.fetchMembers('Hydrabolt', 10).catch(error => { 
        return message.channel.send('Sorry, I don\'t have the proper permissions to send the members!');
    });
  
  let  member = members.array();
  
    let possiblemembers = [];
    members.forEach(function(members) {
         possiblemembers.push(`${members.tag} - ${members.id} - ${members.size}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**MEMBERS**`)
        .setColor(0xCB5A5E)
        .addField(`\`\`\`${message.guild.name}'s members!\`\`\``, `\`\`\`${possiblemembers.join('\n')}\`\`\``)
        .setTimestamp();
}

module.exports.help = {
  name: "members"
}