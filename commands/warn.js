const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf-8"));

module.exports.run = async (bot, message, args) => {
message.delete();
  //!warn @daeshan <reason>
  if(args[0] == "help"){
    message.reply("Usage: $warn <user> <reason>");
    return;
  }
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry, you are not a administrator!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!wUser) return message.reply("Couldn't find the user.");
  if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("I can not warn him/her, because he/she has administrator permission");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.user.username, message.guild.name]) warns[wUser.user.username, message.guild.name] = {
    warns: 0
  };

  warns[wUser.user.username, message.guild.name].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .setTimestamp()
  .addField("Warned User", `<@${wUser.user.username}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.user.username, message.guild.name].warns)
  .addField("Reason", reason);

  let warnschannel = message.guild.channels.find(`name`, "incidents");
  if(!warnschannel) return message.reply("Couldn't find channel");

  warnschannel.send(warnEmbed);

  if(warns[wUser.id].warns == 5){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role dude.");
    let mutetime = "60s";

    try{
      await wUser.send(`You have been muted for ${reason}. The mute will be up in ${mutetime}`);
    }catch(e){
      message.channel.send(`<@${wUser.id}> has their DMs locked. But they have been muted for ${reason}`);
    }

    
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`);
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 10){

    try{
      await wUser.send(`You have been kicked for ${reason} on the server ${message.guild.name}.`);
    }catch(e){
      message.channel.send(`<@${wUser.id}> has their DMs locked. But he/she has been kicked for ${reason}`);
    }
    message.guild.member(wUser).kick(reason);
    message.reply(`<@${wUser.id}> has been kicked.`);
  }
  if(warns[wUser.id].warns == 15){

    try{
      await wUser.send(`You have been softbanned for ${reason} on the server ${message.guild.name}.`);
    }catch(e){
      message.channel.send(`<@${wUser.id}> has their DMs locked. But he/she has been banned for ${reason}`);
    }
    message.guild.member(wUser).ban("You got softbanned. You can rejoin the server inmediatly! Reason: " + reason);
    message.guild.unban(wUser.id).catch(console.error);
    message.reply(`<@${wUser.id}> has been banned from ${message.guild.name}.`);
  }
  if(warns[wUser.id].warns == 20){

    try{
      await wUser.send(`You have been banned for ${reason} on the server ${message.guild.name}.`);
    }catch(e){
      message.channel.send(`<@${wUser.id}> has their DMs locked. But he/she has been banned for ${reason}`);
    }
    message.guild.member(wUser).ban("You got banned. For the reason: " + reason, `Appeals can be made by contacting ${message.guild.owner}.`);
    message.reply(`<@${wUser.id}> has been banned from ${message.guild.name}.`);
  }
}

module.exports.help = {
  name: "warn",
  category: "Moderation",
  description: "Warns a user on the guild.",
  usage: ">warn [@user] [reason here]"
};
