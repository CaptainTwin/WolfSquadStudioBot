const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] == "help"){
      message.reply("Usage: >say <what to say here>");
      return;
    }
    //>say Hi!
    //Hi
    let botmessage = args.join(" ");
    message.delete().catch();
  let sayembed = new Discord.RichEmbed()
  .setColor("#002d77")
  .setDescription(botmessage);
    message.channel.send(sayembed);
}

module.exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "Says the message you type.",
  usage: ">say [message here]"
};