const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
    if(args[0] == "help"){
      message.reply("Usage: >removerole <user> <role>");
      return;
    }
  
    //>removerole @Vliegenier04 <role here>
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
    if(!rMember) return message.reply("Couldn't find that user.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");

    if(!rMember.roles.has(gRole.id)) return message.reply("He/She doesn't has that role");
    await(rMember.removeRole(gRole.id));

    try{
       await rMember.send(`RIP! You lost the ${gRole.name} role in ${message.guild.name}.`)
    }catch(e){
    message.channel.send(`RIP to <@${rMember.id}> we have removed his/hers ${gRole.name} role from him/her. In ${message.guild.name}. We tried to DM him/her, but his/hers DMs are locked.`);
    }
}

module.exports.help = {
  name: "removerole",
  category: "Moderation",
  description: "Remove a role from the mention",
  usage: ">removerole [@user] [role name]"
};