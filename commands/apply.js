const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if (args[0] == "help") {
        message.reply("Usage: >apply");
        return;
    }
    //Defining all things:
    let auser = message.author.username || message.author.id;
    let role = args[1];
    let roles = []
    let answer = args.join(" ").slice(23);
    
    
    //Sending the questions:
    message.channel.send("For what role do you want to apply? (Helper, Moderator, Admin)");
  
    //I want to make the reply from the user here
  
    //Checking if role is chosen:
    if(answer !== message.guild.roles.find(`name`, role) || role) return message.channel.send(`Please choose a role!`)
    /*else(
        message.channel.send(`Why do you wan\'t to become a ${role}?`)
    ).then(message.channel.send("Why do you think we should be giving you the role?"));*/
  
    if(answer === roles) message.channel.send(`Why do you want to become a ${role.name}?`)

    //checking the answer lenghts:
    if(answer <= 50) return message.channel.send(`Sorry your application has been denied. Please be more specific.`);
    if(answer == 50) return message.channel.send(`You will be given the role to see if you have can be a ${role.name}.`).then(auser.addRole(`${role.name}`));
    if(answer => 100) return message.channel.send(`Congrats ${auser.username} you have been accepted. You will be given the role: ${role.name}!`).then(await auser.addRole(role.id))
    
}

module.exports.help = {
    name: "apply",
    category: "Application"

}