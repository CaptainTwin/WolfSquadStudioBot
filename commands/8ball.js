const botconfig = require("../botconfig.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (args[0] == "help") {
        message.reply("Usage: >8ball [question here]");
        return;
    }
    //>8ball <question?>
    if(!args[2]) return message.reply("Please ask a full question.");
    let replies = ["Yes.", "No.", "I don't know.", "Ask again later.", "Lol why are you asking?", "Ask the Elders they are the wisest!", "Lol I dunno."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#1631fc")
    .addField("Asked By", `${message.author.displayName}`)
    .addField("Question", question)
    .addField("Answer", replies[result])
    .setTimestamp();
  
    message.delete();
    message.channel.send(ballembed);
};

module.exports.help = {
  name: "8ball",
  category: "Miscelaneous",
  description: "Gives answer to a random question.",
  usage: ">8ball [question here]"
};