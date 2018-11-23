const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot,message, args) => {
    message.delete();
    if(!message.member.roles.some(r=>["YouTuber", "Admin", "Moderator", "Developer", "Designer", "Owner"].includes(r.name)))
    return errors.noRoles(message, "YouTuber", "Admin", "Moderator", "Developer", "Designer");
    if(args[0] == "help"){
      message.reply("Usage: >announce <what to announce>");
      return;
    }
    //>announce [message here]
  message.delete();
    if(message.member.roles.some(r=>["YouTuber", "Admin", "Moderator", "Developer", "Designer", "Owner"].includes(r.name))) {
        let announceembed = new Discord.RichEmbed()
        .setTitle("Announcement")
        .setDescription(args.join(" "))
        .setColor("#ff6a00")
        .setFooter(`Announced By ${message.author.username}`)
        .setTimestamp()

        let split = args.slice(1);
        let url = args[2]


        let everyone = message.guild.roles.find('name', "@everyone");
        let announceChannel = message.guild.channels.find(`name`, "announcements");
        if(!announceChannel) return message.channel.send("Couldn't find announce channel.");
        announceChannel.send(`${everyone}`, announceembed);
    }
}; 
 


module.exports.help = {
  name: "announce",
  category: "Announces",
  description: "Announces your message.",
  usage: ">announce [message here] (you can use a link)"
};