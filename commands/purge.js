const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message, "MANAGE_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: >purge [@user] [amount]");
      return;
    }
message.delete();
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.channel.send('Must specify an amount to delete!');
if (!amount && !user) return message.channel.send('Must specify a user and amount, or just an amount, of messages to purge!');
message.channel.fetchMessages({
 limit : amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : bot.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
  });
}

module.exports.help = {
  name: "purge",
  category: "Moderation",
  description: "Clears messages in a channel or from a member",
  usage: ">purge [@user] [amount in numbers]"
};