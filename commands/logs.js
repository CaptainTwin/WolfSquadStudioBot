const Discord = require("discord.js");

module.exports.run = async (bot, message, args, tools) => {

    let logFetch = await message.guild.fetchAuditLogs();

    const logEmbed = new Discord.RichEmbed()
    .setDescription(logFetch.entries.first());

    message.delete().catch(O_o=>{});
    return message.channel.send(logEmbed).catch(err => {
        message.channel.send({embed: { color: 606060, description: `**>>>** Failed to show Audit Logs.\n\n**ERROR**\n\`\`\`${err.message}\`\`\`` }}); 
    });
}

module.exports.help = {
    name: "logs"
}