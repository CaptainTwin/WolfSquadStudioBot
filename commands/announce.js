const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot,message, args) => {
    message.delete();
    if(!message.member.roles.some(r=>["YouTuber", "Admin", "Moderator", "Developer", "Designer", "Owner"].includes(r.name)))
    return errors.noRoles(message.channel);
    if(args[0] == "help"){
      message.reply("Usage: >announce <what to announce>");
      return;
    }
    //>announce [message here]
  message.delete();
    if(message.member.roles.some(r=>["YouTuber", "Admin", "Moderator", "Developer", "Designer", "Owner"].includes(r.name))) {

        let split = args.slice(1);
        let url = args[2]

        let announceChannel = message.guild.channels.find(`name`, "announcements");
        if(!announceChannel) return message.channel.send("Couldn't find announce channel.");
        announceChannel.send("@everyone", args.join(" "));
    }
}; 
 


module.exports.help = {
  name: "announce",
  category: "Announces",
  description: "Announces your message.",
  usage: ">announce [message here] (you can use a link)"
};