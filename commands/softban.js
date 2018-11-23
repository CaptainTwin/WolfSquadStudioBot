const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const moment = require('moment');
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: >softban <user> <reason>");
      return;
    }
  //defining and checking for the right permissions
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Couldn't find user.");
    let bReason = args.join(" ").slice(22);
    let banChannel = message.guild.channels.find(`name`, "incidents");
    if(!banChannel) return message.channel.send("Couldn't find the incidents channel.");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned.");
  
  //creating the softbanEmbed for the incidents channel
    let banEmbed = new Discord.RichEmbed()
      .setTitle("Softban")
      .setDescription("Softban! You can rejoin directly. But stick to the rules!!!")
      .setColor("#820000")
      .setTimestamp()
      .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
      .addField("Banned By", `<@${message.author.username}>`)
      .addField("Banned In", message.channel)
      .addField("Time", `moment().format('MMMM Do YYYY, h:mm:ss a`)
      .addField("Reason", `${bReason}`);
  
//creating the softannounce
    let softannounce = new Discord.RichEmbed()
      .setTitle("Softban Announce")
      .setColor("#820000")
      .setDescription(`User ${bUser} got softbanned from ${message.guild.name}!`)
      .setTimestamp();         
  
//banning the user
message.delete().catch(O_o => {});
message.channel.send(softannounce).then(message.delete(5000).catch(O_o => {}));
message.guild.member(bUser).ban("You got softbanned. You can rejoin the server inmediatly! Reason: " + bReason);
message.guild.unban(bUser.id).catch(console.error);
banChannel.send(banEmbed);
console.log(`${bUser.username} has been softbanned from ${message.guild.name} and has been banned by ${message.author.username}.`);
return;
};

module.exports.help = {
  name: "softban",
  category: "Moderation",
  description: "Bans a user from the guild and deletes all messages of that user. Then it will unban the banned user so the banned user can join again.",
  usage: ">softban [@user] [reason]"
};