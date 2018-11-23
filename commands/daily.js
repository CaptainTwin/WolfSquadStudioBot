const discord = require('discord.js');
const currencyFormatter = require('currency-formatter')
const db = require('quick.db')
const ms = require('parse-ms');

module.exports.run = async (bot, message, args) => { // Run the command when a command is called
  
   // This Code Is Registered To Zinx#9129
   // Some Of This Code Has Been Altered To Work As Much As Possible
    
    let cooldown = 8.64e+7; // Cooldown Daily
    let amount = 250; // Daily Payout

    let lastDaily = await db.fetch(`lastDaily_${message.author.id + message.guild.id}`)
    try {
    db.fetch(`account_${message.member.id + message.guild.id}`).then(bucks => {
    if(bucks == null || 0){
        db.set(`account_${message.member.id + message.guild.id}`, 200)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new discord.RichEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
        .setColor(`#FF0000`)
        .setDescription(`Daily already collected today. Please Wait **${timeObj.hours} hours, ${timeObj.minutes} minutes and ${timeObj.seconds} seconds**!`)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastDaily_${message.author.id + message.guild.id}`, Date.now());
        db.add(`account_${message.member.id + message.guild.id}`, amount).then(i => {
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
            .setColor(`DARK_RED`)
            .addField(`Account Holder: `, `${message.author}`)
            .addField(`Daily Retrieved:`, `${currencyFormatter.format(amount, { code: 'USD' })}`)
            message.channel.send(dailyEmbed)
        })}
    })} catch(err) {console.log(err)}
 }

module.exports.help = {
  name: "daily",
  category: "Economy",
  description: "Adds coins each day to your bank account.",
  usage: ">daily"
};