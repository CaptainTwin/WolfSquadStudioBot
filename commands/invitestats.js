const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });
  
    invites = invites.array();
  
    let possibleinvites = [];
    invites.forEach(function(invites) {
         possibleinvites.push(`${invites.inviter.tag} - ${invites.uses} - ${invites.url} - ${invites.maxAge}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**INVITELEADERBOARD**`)
        .setColor(0xCB5A5E)
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
  message.channel.send(embed);
}

module.exports.help = {
  name: "invitestats"
}