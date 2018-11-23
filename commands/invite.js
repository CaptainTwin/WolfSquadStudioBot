const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.guild.channels.find(`name`, "general").createInvite().then(invite =>
   message.channel.send({embed: {
     color: 3447003,
     title: "Invite Link!",
     description: `${invite.url}`}})
);
}

module.exports.help = {
  name: "invite",
  category: "Miscelaneous",
  description: "Gives you a invite link for the server.",
  usage: ">invite"
};