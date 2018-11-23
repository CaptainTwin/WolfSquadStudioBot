const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, func) => {
    message.delete();
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message, "MANAGE_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: >tempmute <user> <1s/d/h/m>");
      return;
    }

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Couldn't find user!");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute this person.");
    let reason = args.slice(2).join(" ");
    if(!reason) return message.reply("Use a reason!"); 
       
    let muterole = message.guild.roles.find(`name`, "muted");

    //start of create muterole

    if(!muterole){
        try{
          muterole = await message.guild.createRole({
              name: "muted",
              color: "#ff0000",
              permissions:[] 
          })
          message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermission(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
          });
    }catch(e){
        console.log(e.stack);
    }
}
let mutetime = args[1];
if(!mutetime) return message.reply("You didn't specify a time!!");

let muteembed = new Discord.RichEmbed()
.setDescription(`Mute executed by ${message.author}.`)
.setColor("#ff9823")
.setTimestamp()
.addField("Muted User", tomute)
.addField("Muted In", message.channel)
.addField("Time", message.createdAt)
.addField("Length", mutetime)
.addField("Reason", reason);

let incidentschannel = message.guild.channels.find(`name`, "incidents");
if(!incidentschannel) return message.reply("You should create an incidents channel.");

incidentschannel.send(muteembed);

//end of create muterole



await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

setTimeout(function(){
  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> has been unmuted.`); 
}, ms(mutetime));


//end of module

}

module.exports.help = {
  name: "tempmute",
  category: "Moderation",
  description: "Mutes a user temporarily.",
  usage: ">tempmute [@user] [sec/hours/days here]"
};