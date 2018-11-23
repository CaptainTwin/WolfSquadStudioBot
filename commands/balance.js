const Discord = require('discord.js');
const currencyFormatter = require('currency-formatter');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports.run = async (bot, message, args) => {
  let member = message.mentions.users.first() || message.member;
  var balance = await db.fetch(`account_${message.member.id + message.guild.id}`);
  let micon = message.guild.iconURL;
  if(balance === null) balance = 50;
  let balembed = new Discord.RichEmbed()
  .setTitle("Balance")
  .setDescription(`${message.guild.name} bank.`)
  .setColor("#bf9b30")
  .setThumbnail('https://vignette.wikia.nocookie.net/retributionsblade/images/0/02/Bag_of_Coins.png/revision/latest?cb=20111024180128')
  .addField("Account Holder", `${message.author.username}`, true)
  .addField("Account Balance", `${currencyFormatter.format(balance, { code: 'USD' })}`, true);
  message.channel.send(balembed);
}
  
module.exports.help = {
  name: "balance",
  category: "Economy",
  description: "Shows the amount of coins on your bank account.",
  usage: ">balance"
};