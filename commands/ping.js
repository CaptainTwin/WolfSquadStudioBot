const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  message.delete();
 message.channel.send({embed: { description: "Hold on one sec"}}).then((message) => {
      message.edit({embed: { description: `:clock: Latency is ${Date.now() - message.createdTimestamp}ms.\n:heartbeat: API Latency is ${Math.round(bot.ping)}ms`}});
});
}

module.exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "Sends a pong respond back with the latency of the bot",
  usage: ">ping"
};