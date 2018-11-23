const Discord   = require("discord.js");
const xplvl   = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  
    let xplevel        = xplvl[message.author.id, message.guild.id];
    let leaderboard = Object.keys(xplevel).map(function(ID) {
        return {ID: user[ID], xp: xplevel[ID].xp, lvl: xplevel[ID].lvl}
    });

    console.log(leaderboard)
    let lbEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`~ Leaderboard`, bot.user.displayAvatarURL)
    .setDescription(`Level leaderboard for **${message.guild.name}**.`);

    leaderboard = leaderboard.sort((a, b) => b.xp - a.xp).slice(0, 11);
    leaderboard.forEach((xplevel, i) => {
        if (xplevel.ID !== "xp", "level") {
            let usr = message.guild.members.find(`id`, xplevel.ID);
            if (!usr) usr = "User Not Found";
            else usr = usr.user.tag;

            lbEmbed.addField(`**#${i}** ~ ${usr}`, `**XP** ${xplevel.xp} **LVL** ${xplevel.lvl}`);
        }
    });

    message.delete().catch(O_o=>{});
    return message.channel.send(lbEmbed);
}

module.exports.help = {
    name: "leaderboard"
}