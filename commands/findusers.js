const Discord = require('discord.js');
const sm = require('string-similarity')

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.channel.send({embed: {
      color: 0xff0000,
      Description: "Error",
      fields: [{
        name: "Text",
        value: "Please input some text"
      }]
    }});

    let members = [];
    let indexes = [];

    message.guild.members.forEach(function(member){
        members.push(member.user.username);
        indexes.push(member.id);

        })

        let match = sm.findBestMatch(args.join(' '), members);
        let username = match.bestMatch.target;

        let member = message.guild.members.get(indexes[members.indexOf(username)]);
        message.channel.send({embed: { description: `${message.author} did you mean:` + member.user.username}});
}
module.exports.help = {
  name: "findusers",
  category: "Miscelaneous",
  description: "Finds a user in a guild.",
  usage: ">findusers [letters here]"
};