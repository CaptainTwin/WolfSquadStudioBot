const Discord = require("discord.js");
const fs = require("fs");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescriction("Insufficient Permission")
        .setColor("#b70000")
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(50000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
          .setAuhtor(message.author.username)
          .setColor("#b70000")
          .setTitle("Error")
          .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(m => m.delete(50000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor("#b70000");

    message.channel.send(embed).then(m => m.delete(50000));
}

module.exports.cantfindUser = (message, channel) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Can't find user")
    .setColor("#b70000");

  message.channel.send(embed).then(m => m.delete(50000));
}

  module.exports.noReason = (message, channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please supply a reason.")
        .setColor("#b70000");

    message.channel.send(embed).then(m => m.delete({timeout: 50000}));
    }
  
    module.exports.noRoles = (message, channel, roles) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You do not have the required roles.")
        .setColor("#b70000");
      
    message.channel.send(embed).then(m => m.delete({timeout: 50000}));
    }