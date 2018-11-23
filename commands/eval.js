const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.delete();
    if(message.author.id !== '372995308814073856') return;
    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/'/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
  
  console.log(`\n${message.author.username}#${message.author.discriminator} Used .Eval Command On ${message.guild.name}`)
    let argresult = args.join(' ');
    if (message.author.id !==  '372995308814073856') {
           // Check if user have Permissions to use the command
          message.channel.send('You Don not Have Permissions To Use This Command !'); // Send Message to the channel if they dont have permissions
          return; // Returns the code so the rest doesn't run
        }
        if (!argresult) {
          return message.channel.send("Please Specify a Code To Run!");
        }
  
        try {
  
          var evaled = eval(argresult);
  
          if (typeof evaled !== "string")
         evaled = require("util").inspect(evaled);
         if (evaled.includes(bot.token)) {
            console.log(`\n${message.author.username}#${message.author.discriminator} Try To Get The Bot Token On ${message.guild.name} (ServerID: ${message.guild.id}).\n`)
           let tokenevalembed = new Discord.RichEmbed()
           .setTitle(':exclamation: :exclamation: You\'ve been warned :exclamation: :exclamation:')
           .setColor("#FF5733")
           .setDescription(`Not for the pack members to see ${message.author}!`)
           .setTimestamp();
           return message.channel.send(tokenevalembed);
          }
  
          let evalembed = new Discord.RichEmbed()
          .setTitle(`Eval Succes: on ${bot.user.username}`, `** **`)
          .addField(":inbox_tray: **INPUT**", "```" + args.join(" ") + "```")
          .addField(":outbox_tray: **OUTPUT**", "```" + clean(evaled) + "```")
          .setColor("#FF5733")
          .setFooter(message.createdAt, message.author.avatarURL)
          .setTimestamp();
          message.channel.send(evalembed)
  
        } catch (err){
          let errembed = new Discord.RichEmbed()
          .setTitle(`Eval Error:`, "There was a problem with the code that you tried to run!")
          .setColor("#FF5733")
          .setFooter(message.createdAt, message.author.avatarURL)
          .addField(":no_entry: ERROR", "```" + clean(err) + "```")
          .setTimestamp();
          message.channel.send(errembed).catch( error => message.channel.send(`**ERROR:** ${error.message}`))
        };
}

module.exports.help = {
  name: "eval",
  category: "Owner",
  description: "Can do everything",
  usage: ">eval [code here]"
};