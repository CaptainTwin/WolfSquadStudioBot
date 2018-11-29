const Discord   = require("discord.js");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
    let data        = xp[message.guild.id, message.author.id].GuildMembers;
    let leaderboard = Object.keys(data).map(function(UserID) {
        return {ID: UserID, xp: data[UserID].xp, lvl: data[UserID].lvl}
    });

    let lbEmbed = new Discord.RichEmbed()
    .setColor("#ff6a00")
    .setAuthor(`~ Leaderboard`, bot.user.displayAvatarURL)
    .setDescription(`Level leaderboard for **${message.guild.name}**.`);

    leaderboard = leaderboard.sort((a, b) => b.xp - a.xp).slice(0, 11);
    leaderboard.forEach((data, i) => {
        if (data.ID !== "GuildMembers") {
            let usr = message.guild.members.find(`id`, data.ID);
            if (!usr) usr = "User Not Found";
            else usr = usr.user.tag;

            lbEmbed.addField(`**#${i}** ~ ${usr}`, `**XP** ${data.xp} **LVL** ${data.lvl}`);
        }
    });

    message.delete().catch(O_o=>{});
    return message.channel.send(lbEmbed);
}

module.exports.help = {
    name: "leaderboard"
}
