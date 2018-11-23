const Discord = require("discord.js");
const moment = require("moment");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if (args[0] == "help") {
        message.reply("Usage: >deny [comments]");
        return;
    }
  let aUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
    if (!aUser) return errors.cantfindUser(message.channel);
  if(message.author.id !== "372995308814073856") return message.channel.send({embed: { description: `You can't use this command ${message.author}`}});
  
  let comments = args.join(" ").slice(23);;
  let acceptembed = new Discord.RichEmbed()
  .setTitle(`:cry: Sorry ${aUser.user.username} :cry:`)
  .setColor("#ff1500")
  .setDescription(`Comments: ${comments}`)
  .setFooter(`Denied on: ${moment(message.createdAt).format(`MMMM Do YYYY`)}`);
  
  message.channel.send(acceptembed).then(msg=> msg.delete(5000).catch(console.error));
  aUser.send(`Sorry you have been denied! Comments: ${comments}.`)
  
};

module.exports.help = {
  name: "deny",
  category: "Administrator",
  description: "Accepts an apply for a rank.",
  usage: ">acceptapply [comments]"
};