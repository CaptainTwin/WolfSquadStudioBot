const botconfig = require("../botconfig.json");
const Discord   = require("discord.js");
let prefix      = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
message.delete();
  let videoURL = args.join(" ");
  let vidannounce = message.guild.channels.find(`name`, "ytvideos");
  let role = message.guild.roles.find(`name`, "YouTuber");

  if(message.member.roles.has(role.id)){
    let videoembed = new Discord.RichEmbed()
      .setTitle("Check out my new video/livestream!")
      .setAuthor(`${message.author.username}`)
      .setColor("#FF0000")
      .setFooter(`Thanks for watching my video!!`)
      .setTimestamp()
      .addField("URL:", videoURL);
        
    let everyone = message.guild.roles.find('name', "@everyone");
    vidannounce.send(`${everyone}`, videoembed);
  }
  return;
};

module.exports.help = {
  name: "video",
  category: "YouTube",
  description: "Sends a new video/ livestream announce to the announcements channel.",
  usage: ">video [video/livestream link here]"
};