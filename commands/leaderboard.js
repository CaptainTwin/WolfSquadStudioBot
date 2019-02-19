const Discord   = require("discord.js");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
    let data        = xp;
    let leaderboard = Object.keys(data).map(function(UserID) {
        return {id: UserID, xp: data[UserID].xp, lvl: data[UserID].level};
    });

    let lbEmbed = new Discord.RichEmbed()
    .setColor("#ff6a00")
    .setAuthor(`~ Leaderboard`, bot.user.displayAvatarURL)
    .setDescription(`Level leaderboard for **${message.guild.name}**.`);

    leaderboard = leaderboard.sort((a, b) => b.xp - a.xp).slice(0, 10);
    leaderboard.forEach((data, i) => {
      let usr = message.guild.member(data.id);

      console.log(usr);
      console.log(data);

      if (!usr) return; // usr = "User Left";
      else usr = usr.user.tag;

      lbEmbed.addField(`**#${i+1}** - ${usr}`, `**XP** ${data.xp} **LVL** ${data.lvl}`);
    });

    message.delete().catch(o=>o);
    return message.channel.send(lbEmbed);
}

module.exports.help = {
    name: "leaderboard"
}
