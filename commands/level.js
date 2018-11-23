const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  message.delete();
    if(!xp[message.author.id, message.guild.id]){
        xp[message.author.id, message.guild.id] = {
            xp: 0,
            level: 0
        };
    }
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let curxp = xp[message.author.id, message.guild.id].xp;
    let curlvl = xp[message.author.id, message.guild.id].level;
    let nxtlvlXp = curlvl * 125;
    let difference = nxtlvlXp - curxp; 

    let levelembed = new Discord.RichEmbed()
    .setTitle(`${member.user.username} Level Stats!`)
    .setColor("#d604cf")
    .addField("Level", curlvl, true)
    .addField("XP", curxp, true)
    .setFooter(`${difference} XP needed till level up.`, member.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(levelembed);        
}


module.exports.help = {
  name: "level",
  category: "Fun",
  description: "Shows your current level and xp.",
  usage: ">level"
};