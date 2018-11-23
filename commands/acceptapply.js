const Discord = require("discord.js");
const moment = require("moment");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if (args[0] == "help") {
        message.reply("Usage: >accept [rank] [comments]");
        return;
    }
  let aUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
    if (!aUser) return errors.cantfindUser(message.channel);
  let role = args[1];
  if(!role) return message.channel.send({embed: {description: `Specify a role`}});
  let arole = message.guild.roles.find(`name`, role);
  if(!arole) return message.channel.send({embed: {description: `Couldn't find that role`}})
  if(message.author.id !== "372995308814073856") return message.channel.send({embed: { description: `You can't use this command ${message.author}`}});
  
  let comments = args.join(" ").slice(23 + role.length);;
  let acceptembed = new Discord.RichEmbed()
  .setTitle(`:confetti_ball: Congrats ${aUser.user.username} :confetti_ball:`)
  .setColor("#00ff15")
  .setDescription(`Rank Gained: ${arole.name}\nComments: ${comments}`)
  .setFooter(`Accepted on: ${moment(message.createdAt).format(`MMMM Do YYYY`)}`);
  
  message.channel.send(acceptembed).then(msg=> msg.delete(5000).catch(console.error));
  await (aUser.addRole(arole.id));
  aUser.send(`Congrats you have been accepted! You have been given the role: ${arole.name}. Comments: ${comments}.`)
  
};

module.exports.help = {
  name: "accept",
  category: "Administrator",
  description: "Accepts an apply for a rank.",
  usage: ">acceptapply [comments]"
};