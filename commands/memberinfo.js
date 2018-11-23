const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const moment = require('moment');
require("moment-duration-format");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  const status = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Do Not Disturb',
  offline: 'Offline/Invisible'
};
let member = message.guild.member(message.mentions.users.first())
    if(!member.user) return message.channel.send("Couldn't find that user.");
    if(member.roles.size !=0);
    let icon = member.user.displayAvatarURL;
  var game = "N/A"; // Haven't checked for any games yet.

if (!member.presence.game) { // Check if the user has an activity
    game = "No game is played"; // If not, no game specified.
} else {
    game = member.presence.game.name; // Else, it's displaying the game.
}
  message.delete();

        let memberembed = new Discord.RichEmbed()
        .setDescription("User Information")
        .setColor("#5998ff")
        .setThumbnail(icon)
        .setFooter(`Asked by ${message.author.username}`)
        .setTimestamp()
        .addField("Username", member.user.username, true)
        .addField("Display Name", member.displayName, true)
        .addField("Tag", member.user.tag, true)
        .addField("Discriminator", member.user.discriminator, true)
        .addField("Roles:", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`)
        .addField("Created On", `\`${moment.utc(member.user.createdAt).format("LTS")} (${ms(Date.now()- member.user.createdAt, {long: true})})\``, true)
        .addField("You joined", `\`${moment.utc(message.member.joinedAt).format("LTS")} (${ms(Date.now()- message.member.joinedAt, {long: true})})\``, true)
        .addField("Status", `${status[member.user.presence.status]}`, true)
        .addField("Game", `*${game}*`, true);
        message.channel.send(memberembed);
}

module.exports.help = {
  name: "memberinfo",
  category: "Info",
  description: "Shows you information about a mentioned user.",
  usage: ">memberinfo [@user]"
};