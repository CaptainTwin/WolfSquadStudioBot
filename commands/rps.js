const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = ["rock", "paper", "scissors", "rock", "paper", "scissors"];

    let result  = Math.floor((Math.random() * replies.length));
    let choosen = args.join(" ").toLowerCase();

    // Here we check if it's a valid rock, paper, or scissors type.
  if (choosen === "rock" || choosen === "paper" || choosen === "scissors") {
    let rpsembed = new Discord.RichEmbed()
    .setTitle(`Rock Paper Scissors Result`)
    .setDescription(`Who will win? That's the question.`)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("User Choice", choosen)
    .addField("Computer Choice", `${replies[result]}`);
  
    message.channel.send(rpsembed);
  } else {
    message.reply(`Please use rock, paper or scissors`);
  };
}

module.exports.help = {
  name: "rps"
}