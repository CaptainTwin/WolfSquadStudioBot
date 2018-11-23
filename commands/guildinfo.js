const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const moment = require('moment');
require("moment-duration-format");
const ms = require("ms");

module.exports.run = async (bot,message, args) => {
  let verificationLevel = message.guild.verificationLevel;
        let textchannel = message.guild.channels.filter(c => c.type === "text").size;
        let voicechannel = message.guild.channels.filter(c => c.type === "voice").size;
        let bots = message.guild.members.filter(m => m.user.bot).size;
        let humans = message.guild.members.filter(m => !m.user.bot).size;
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setDescription(`Shows the information of ${message.guild.name}`)
        .setColor("#dd1c1c")
        .setThumbnail(sicon)
        .addField("Guild Name", message.guild.name, true)
        .addField("Guild ID", message.guild.id, true)
        .addField("Created By", message.guild.owner, true)
        .addField("Guild Region", message.guild.region.toUpperCase(), true)
        .addField("Guild VerificationLevel", message.guild.verificationLevel, true)
        .addField("Created On", `${moment.utc(message.guild.createdAt).format("MMM Do YY")} (${ms(Date.now()- message.guild.createdAt, {long: true})})`, true)
        .addField("Users", `${humans}`, true)
        .addField("Bots", `${bots}`, true)
        .addField("Text Channels", `${textchannel}`, true)
        .addField("Voice Channels", `${voicechannel}`, true)
        .addField("Roles", message.guild.roles.size, true)
        .addField('Total Members Online', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online`, true)
        .addField("Total Members Idle", `**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away`, true)
        .addField("Total Members Do not Disturb", `**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb`, true)
        .addField("Total Members Invisible/Offline", `**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\**`, true)
        .setTimestamp();
  message.channel.send(serverembed);
}

module.exports.help = {
  name: "guildinfo",
  category: "Info",
  description: "Gives information about the guild.",
  usage: ">guildinfo"
};