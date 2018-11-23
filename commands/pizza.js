const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const ahkEmbed = new Discord.RichEmbed()
        .setTitle(`Please choose a type of pizza.`)
        .setColor(`RANDOM`)
        .setDescription('We have: `pepperoni`, `cheese`, and `pineapple`');
    message.channel.send({
        embed: ahkEmbed
    })



    const msgs = await message.channel.awaitMessages(msg => {
        if (msg.content.startsWith("pepperoni")) {
            const ahkkEmbed = new Discord.RichEmbed()
                .setTitle(`Here is your pepperoni pizza! Enjoy :D`)
                .setColor(`RANDOM`)
                .setImage(`http://www.pngmart.com/files/1/Pepperoni-Pizza.png`)
            message.channel.send({
                embed: ahkkEmbed
            })
            return;
        } else if (msg.content.startsWith("cheese")) {
            const ahkkkEmbed = new Discord.RichEmbed()
                .setTitle(`Here is your cheese pizza! Enjoy :D`)
                .setColor(`RANDOM`)
                .setImage(`http://www.pngmart.com/files/1/Cheese-Pizza.png`)
            message.channel.send({
                embed: ahkkkEmbed
            })

        } else if (msg.content.startsWith("pineapple")) {
            async function pineapple() {
                message.channel.send('really?')
                const mesgs = await message.channel.awaitMessages(messg => {
                    if (message.content.startsWith("yes")) {
                        const ahkkkkEmbed = new Discord.RichEmbed()
                            .setTitle(`Here is your pineapple pizza! Enjoy :D`)
                            .setColor(`RANDOM`)
                            .setImage(`https://www.cicis.com/media/1140/pizza_adven_hampineapple.png`)
                        message.channel.send({
                            embed: ahkkkkEmbed
                        })
                        return;
                    } else {
                        if (message.content.startsWith("no")) {
                            message.channel.send('Thanks!')
                            return;
                        }
                    }

                }, {
                    time: 50000
                })
            }
            pineapple()
        }
    }, {
        time: 500000
    })
}

module.exports.pizza = {}

module.exports.help = {
    name: 'pizza'
}