const Discord = require('discord.js');

module.exports.run = async (bot,message, args) => {
  let cicon = bot.user.iconURL;
  let creditembed = new Discord.RichEmbed()
  .setTitle("Credits")
  .setDescription("The developers who helped me to code this bot!")
  .setThumbnail(cicon)
  .setColor("#42f459")
  .setFooter("Thanks to all the developers who helped me. Thanks to them my bot is running.")
  .addField("QSmally", "QSmally has helped me with alot commands. He is also making his own Minecraft Anticheat Client (QClient) so be sure to check that out!! Thank you for your help.", true)
  .addField("TritaxXCoder", "TritaxXCoder has helped me with alot commands and trying to host my bot. Thank you for your help.", true)
  .addField("c4m3r0n", "c4mr0n has helped me with commands and trying to host my bot. Thank you for your help.", true)
  .addField("Cubz", "Cubz has helped me with commands. Thank you for your help.", true)
  .addField("Bolt", "Bolt has helped me with commands. Be sure to check out his YouTube channel. Thank you for your help.", true)
  .addField("YouTube Help", "I also had help with my bots by following tutorials on YouTube. Good places for me where {TheSourceCode}, Evie.Codes, AnIdiotsGuide and PlexiDevelopment.", true)
  .addField("RexoiL", "RexoiL has helped me with commands. Thanks for your help.", true)
  .addField("♔ Dяεαмү アlαүεя ♔", "♔ Dяεαмү アlαүεя ♔ has helped me with commands. Thanks for your help.", true);
  message.member.send(creditembed)
};
module.exports.help = {
  name: "credits",
  category: "Miscelaneous",
  description: "Shows you the people who helped me made this bot",
  usage: ">credits"
};