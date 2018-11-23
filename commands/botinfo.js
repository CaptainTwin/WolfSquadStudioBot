const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const moment = require('moment');
require("moment-duration-format");
const ms = require("ms");
var upSecs = 0;
var upMins = 0;
var upHours = 0;
var upDays = 0;
setInterval(function() {
    upSecs = upSecs + 1
    if (upSecs >= 60) {
        upSecs = 0
        upMins = upMins + 1
    }
    if (upMins >= 60) {
        upMins = 0
        upHours = upHours + 1
    }
    if (upHours >= 24) {
        upHours = 0
        upDays = upDays + 1
    }
}, 1000)


module.exports.run = async (bot, message, args) => {
  message.delete();
  let owner = "Cassieboy2001#8330";
    let bicon = bot.user.displayAvatarURL;
         let botembed = new Discord.RichEmbed()
         .setTitle("Bot Info")
         .setDescription("Shows the information of the bot.")
         .setColor("#dd1c1c")
         .setThumbnail(bicon)
         .addField("Created By", `${owner}`)
         .addField("Bot Name", bot.user.username, true)
         .addField("Bot Tag", bot.user.tag, true)
         .addField("Created On", `\`${moment.utc(bot.user.createdAt).format("dddd, MMMM Do YYYY")} (${ms(Date.now()- bot.user.createdAt, {long: true})})\``, true)
         .addField("Uptime After Restart", `${upDays} Day(s), ${upHours} Hour(s), ${upMins} Minute(s) and ${upSecs} Second(s)`, true)
         .addField("Guilds", bot.guilds.size.toLocaleString(), true);
         return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo",
  category: "Info",
  description: "Gives you information of the bot.",
  usage: ">botinfo"
};