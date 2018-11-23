const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let micon = message.member.displayAvatarURL;
    let ireason = args.join(" ");
    if(!ireason) return message.channel.send("Couldn't find your idea.");

    let ideaEmbed = new Discord.RichEmbed()
    .setTitle("**IDEA**")
    .setColor("#ff0000")
    .setAuthor(`${message.author.username}`)
    .setFooter(`Thanks for the suggestion ${message.author.username}`)
    .setTimestamp()
    .addField("Idea", ireason, true);

    let ideachannel = message.guild.channels.find(`name`, "ideas");
    if(!ideachannel) return message.channel.send("Couldn't find the channel.");
  
  const ideasend = await ideachannel.send(ideaEmbed)
    await ideasend.react("👍");
    await ideasend.react("👎");
};
                                  

module.exports.help = {
  name: "suggest",
  category: "Miscelaneous",
  description: "Suggests an idea for the something",
  usage: ">suggest [idea here]"
};