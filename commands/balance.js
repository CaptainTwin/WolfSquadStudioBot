const Discord = require('discord.js');
const ms = require('parse-ms');
let coins = require("../storage/coins.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  
  //>coins
  
  if(!coins[message.author.id + message.guild.id]){
    coins[message.author.id + message.guild.id] = {
      coins: 0,
    }
  };
  
  let uCoins = coins[message.author.id + message.guild.id].coins;
  
  let coinembed = new Discord.RichEmbed()
  .setTitle(`**BALANCE**`)
  .setDescription(`Balance of ${message.author.username} in the server ${message.guild.name}`)
  .setColor("#DAA520")
  .addField("Coins", uCoins, true);
  
  message.channel.send(coinembed);
}
  
module.exports.help = {
  name: "balance",
  category: "Economy",
  description: "Shows the amount of coins on your bank account.",
  usage: ">balance"
};