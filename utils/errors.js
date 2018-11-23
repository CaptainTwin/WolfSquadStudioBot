const Discord = require("discord.js");
const fs = require("fs");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescriction("Insufficient Permission")
        .setColor("#b70000")
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
          .setAuhtor(message.author.username)
          .setColor("#b70000")
          .setTitle("Error")
          .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor("#b70000");

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("You cannot ban a bot")
    .setColor("#b70000");
  
  channel.send(embed).then(m => m.delete(5000));
}

  module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please supply a reason.")
        .setColor("#b70000");

    channel.send(embed).then(m => m.delete({timeout: 5000}));
    }
  
  module.exports.noRoles = (message, roles) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("You don't have roles to use this command!")
        .setColor("#b70000")
        .addField("Role Needed", roles);

    message.channel.send(embed).then(m => m.delete(5000));
}