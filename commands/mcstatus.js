const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "https://status.mojang.com/check";

module.exports.run = async (bot, message, args) => {
  
  snekfetch.get(api).then(r => {
    let body = r.body;
    console.log(body[0]["minecraft.net"]);
    
    let status;
if (body[0]["minecraft.net"] == "green") {
      status = "green";
    }
    else if (body[0]["minecraft.net"] == "yellow") {
    status = "yellow";
    }
    else {
      status = "red";
    }
    
    let mojangembed = new Discord.RichEmbed()
    .setTitle("Mojang Status")
    .setColor("#00ff26")
    .setDescription(`Enjoy the status of Minecraft`)
    .setAuthor(message.author.username)
    .setTimestamp()
    .setFooter(`You can connect to the Minecraft servers ${message.author.username}`)
    .addField("Status", `The status of mojang is ${status}`);
    message.channel.send(mojangembed);
  });
}

module.exports.help = {
  name: "mcstatus"
}