const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    //>addrole @Vliegenier04 <role here>
  message.delete();
    let rUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
    if (!rUser) return errors.cantfindUser(message.channel);
    let role = args.slice(1).join(" ");
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");

    if(rUser.roles.has(gRole.id)) return message.reply("He/She already has that role.");
    await(rUser.addRole(gRole.id));
    try{
       await rUser.send({embed: { description: `Congrats! :confetti_ball: You have been given the role ${gRole.name}! In ${message.guild.name}`}})
    }catch(e){
    message.channel.send({embed: { description: `<@${rUser.id}> Congrats! :confetti_ball: You got the ${gRole.name} role in ${message.guild.name}!. We tried to DM you, but your DMs are locked.`}});
    }
}

module.exports.help = {
  name: "addrole",
  category: "Moderation",
  description: "Sets a role to a mentioned user.",
  usage: ">addrole [@user] [role name]"
};