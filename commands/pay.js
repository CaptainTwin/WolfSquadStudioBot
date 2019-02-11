const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../storage/coins.json")

module.exports.run = async (bot, message, args) => {
  
  //>pay @user amount
  if(!coins[message.author.id + message.guild.id]) {
    return message.reply("You don't have any coins!")
  };
  
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  
  if(!coins[pUser.id + message.guild.id])
    coins[pUser.id + message.guild.id] = {
      coins: 0
    };
  
  let pCoins = coins[pUser.id + message.guild.id].coins;
  let sCoins = coins[message.author.id + message.guild.id].coins;
  
  if(sCoins < args[0]) return message.reply("You don't have enough coins!");
  
  coins[message.author.id + message.guild.id] = {
    coins: sCoins - parseInt(args[1])
  };
  
  coins[pUser.id + message.guild.id] = {
    coins: pCoins + parseInt(args[1])
  };
  
  message.channel.send(`${message.author.username} has payed ${pUser.user.username} ${args[1]} coins!`)
  
  fs.writeFile("../storage/coins.json", JSON.stringify(coins), err => {
    if(err) console.log(err)
  });
}
  
module.exports.help = {
  name: "pay",
  category: "Economy",
  description: "Shows the amount of coins on your bank account.",
  usage: ">pay"
};