const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, tools) => {
    if(args[0] == "help"){
      message.reply("Usage: >logs");
      return;

const Audit = await message.guild.fetchAuditlogs({limit: 3});
Audit = Audit.first();
      
message.channel.send(`${Audit}`)
console.log(Audit);
}
}

module.exports.help = {
    name: "logs"
}