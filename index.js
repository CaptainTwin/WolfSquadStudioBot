const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const moment = require('moment');
require("moment-duration-format");
const ms = require("ms");
bot.commands = new Discord.Collection();
let xp = require("./xp.json");
let orange = botconfig.orange;
let prefix = botconfig.prefix;

  fs.readdir("./commands/", (err, files) => {
      if(err) console.log(err);

      let jsfile = files.filter(f => f.split(".").pop() === "js")
      if(jsfile.length <= 0){
          console.log("Couldn't find commands.");
          return;
      }

      jsfile.forEach((f, i) =>{
          let props = require(`./commands/${f}`);
          console.log(`${f} is succesfully loaded.`);
          bot.commands.set(props.help.name, props);
      });

  })

//bot playing with wolves
bot.on("ready", async () => {
    console.log(`${bot.user.username} is running and connected to Discord! ${bot.user.username} should run without any errors.`);
    bot.user.setActivity("Prefix: >", {type: "PLAYING"});
    bot.user.setStatus("Online");
  
  var files = ['index.js'];
  for (var index in files) {
    (function (filename) {
        fs.readFile("./index.js", "utf8", function(err, data) {
            // You can use 'filename' here as well.
            console.log(`Reading ${filename}`);
        });
    }(files[index]));
}
});

//guildCreate
bot.on("guildCreate", guild =>{
  bot.guilds.map(g => g.owner.username + guild.name);
  let owner = guild.owner;
  owner.send("Thanks for using my bot. This bot has to have administrator permission and some channels called logs, incidents, ideas, reports ,announcements and videos-and-livestreams. If you have any questions you can contact me using discord: Cassieboy2001#8330");
    console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}.`);
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

//guildMemberAdd
bot.on("guildMemberAdd", async member => {
    let bots = member.guild.members.filter(m => m.user.bot).size;
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    console.log(`${member.user} joined the squad.`);
    let aicon = member.guild.iconURL;
    let role = member.guild.roles.find("name", "member");
    let welcomechannel = member.guild.channels.find(`name`, "welcome");
    let welcomeembed = new Discord.RichEmbed()
    .setTitle("Welcome!")
    .setColor("#00ff26")
    .setDescription(`${member.user} Welcome to the pack! We now have ${member.guild.memberCount} members.`);
  welcomechannel.send(welcomeembed)
  
function getUpdates(i) {
    const mcChannel = i.guild.channels.find(`id`, "460829572875681812");
    const hchannel = i.guild.channels.find(`id`, "460829762600828938");
    const bchannel = i.guild.channels.find(`id`, "460829821518217216");
    
    mcChannel.setName(`Member Count: ${i.guild.memberCount}`);
    hchannel.setName(`Human Count: ${humans}`);
    bchannel.setName(`Bot Count: ${bots}`);
    
}
getUpdates(member);
});

//guildMemberRemove
bot.on("guildMemberRemove", (member) => {
let bots = member.guild.members.filter(m => m.user.bot).size;
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    console.log(`${member.user} left the squad.`);
    let aicon = member.guild.iconURL;
    let role = member.guild.roles.find("name", "member");
    let welcomechannel = member.guild.channels.find(`name`, "welcome");
    let welcomeembed = new Discord.RichEmbed()
    .setTitle("Goodbye!")
    .setColor("#00ff26")
    .setDescription(`${member.user} is going further without a pack! We now have ${member.guild.memberCount} members.`);
  welcomechannel.send(welcomeembed)
   
    
function getUpdates(i) {
    const mcChannel = i.guild.channels.find(`id`, "460829572875681812");
    const hchannel = i.guild.channels.find(`id`, "460829762600828938");
    const bchannel = i.guild.channels.find(`id`, "460829821518217216");
    
    mcChannel.setName(`Member Count: ${i.guild.memberCount}`);
    hchannel.setName(`Human Count: ${humans}`);
    bchannel.setName(`Bot Count: ${bots}`);
    
}
getUpdates(member);
  });

//role update
bot.on("roleUpdate", async (oldRole, newRole) => {
    let logchannnel = newRole.guild.channels.find(`name`, "logs");
  let roleupdateembed = new Discord.RichEmbed()
  .setColor("#00ff33")
  .setDescription(`The role ${oldRole.name} has been changed to ${newRole.name}`);
    logchannnel.send(roleupdateembed);
});

//roleCreate
bot.on("roleCreate", async role => {
  let guild = role.guild;
  let logchannel = role.guild.channels.find(`name`, "logs");
  let roleembed = new Discord.RichEmbed()
  .setColor("#00ff33")
  .setDescription(`The role ${role.name} has been created!`);
    logchannel.send(roleembed);
});

//roleDelete
bot.on("roleDelete", async role => {
  let guild = role.guild;
  let logchannel = role.guild.channels.find(`name`, "logs");
  let roledelembed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setDescription(`The role ${role.name} has been deleted!`);
    logchannel.send(roledelembed);
});

//userUpdate
bot.on("guildMemberUpdate", async (oldMember, newMember) => {
    let logchannel = newMember.guild.channels.find(`name`, "logs");
  let updateembed = new Discord.RichEmbed()
  .setColor("#00ff33")
  .setDescription(`The user ${oldMember.displayName} has been changed to ${newMember}.`);
    logchannel.send(updateembed);
});

//channelCreate
bot.on("channelCreate", async channel => {
  let logs = channel.guild.channels.find("name", "logs");
  let channelcreateembed = new Discord.RichEmbed()
  .setColor("#00ff33")
  .setDescription(`There is a new channel created called: ${channel}`);
  logs.send(channelcreateembed);
});

//channelDelete
bot.on("channelDelete", async channel => {
  let logs = channel.guild.channels.find("name", "logs");
  let channeldelembed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setDescription(`The channel ${channel.name} has been deleted!`);
  logs.send(channeldelembed);
});

//bot message
bot.on("message", async message => {
    if(!message.guild.id == "428222795164418051"){
        message.kick();
    }
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    if (message.content.indexOf(botconfig.prefix) !== 0) return;

//xp

    let xpAdd = Math.floor(Math.random() * 7) + 8;
    console.log(xpAdd);

    if(!xp[message.author.id, message.guild.id]){
        xp[message.author.id, message.guild.id] = {
            xp: 0,
            level: 0
        };
    }

    let curxp = xp[message.author.id, message.guild.id].xp;
    let curlvl = xp[message.author.id, message.guild.id].level
    let nxtlvl = xp[message.author.id, message.guild.id].level * 100;
    xp[message.author.id, message.guild.id].xp = curxp + xpAdd;
    if(nxtlvl <= xp[message.author.id, message.guild.id].xp){
        xp[message.author.id, message.guild.id].level = curlvl + 1;
        let lvlupembed = new Discord.RichEmbed()
        .setTitle("Level Up!")
        .setColor(orange)
        .addField("New Level", curlvl + 1);

        message.channel.send(lvlupembed).then(msg => {msg.delete(5000)});
    
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
  });
};
  
    //let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

  try {
      let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(`${message.author.tag} has run the command ${cmd}`);  
  }
});

bot.login(process.env.TOKEN);