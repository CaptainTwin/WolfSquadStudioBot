const discord = require('discord.js');
const currencyFormatter = require('currency-formatter');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports.run = async (bot, message, args) => { // Run the command when a command is called  
 // This Code Is Registered To Zinx#9129
 // All This Code Is Original & By Him - Thank You For Using

 //db.delete('Alfa1-Storage') //If you modify the code below **KEEP THIS** it resets the database basically & inputs the values again below.

/*// Page 1 List
    let ReplaceMeh1 = { name: 'Role ', ID: 1, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'}; // Page 1 - This is also Push 1, modify to your hearts content :D
    let ReplaceMeh2 = { name: 'ReplaceMeh2', ID: 2, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'};
    let ReplaceMeh3 = { name: 'ReplaceMeh3', ID: 3, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'}
    let ReplaceMeh4 = { name: 'ReplaceMeh4', ID: 4, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'}
    let ReplaceMeh5 = { name: 'ReplaceMeh5', ID: 5, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'}
    let ReplaceMeh6 = { name: 'ReplaceMeh6', ID: 6, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'}

// Page 2 List
    let ReplaceMeh7 = { name: 'ReplaceMeh7', ID: 7, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'};
    let ReplaceMeh8 = { name: 'ReplaceMeh8', ID: 8, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'};
    let ReplaceMeh9 = { name: 'ReplaceMeh9', ID: 9, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'}
    let ReplaceMeh10 = { name: 'ReplaceMeh10', ID: 10, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'}
    let ReplaceMeh11 = { name: 'ReplaceMeh11', ID: 11, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'}
    let ReplaceMeh12 = { name: 'ReplaceMeh12', ID: 12, description: 'Zinx#9129 Was Here & Breaking Code <3', price: '69'}

// Page 1 Push + TBD
    db.push('Alfa1-Storage', ReplaceMeh1); // Pushes the object/details above into the specified DB
    db.push('Alfa1-Storage', ReplaceMeh2);
    db.push('Alfa1-Storage', ReplaceMeh3);
    db.push('Alfa1-Storage', ReplaceMeh4);
    db.push('Alfa1-Storage', ReplaceMeh5);
    db.push('Alfa1-Storage', ReplaceMeh6);

// Page 2 Push
    db.push('Alfa1-Storage', ReplaceMeh7);
    db.push('Alfa1-Storage', ReplaceMeh8);
    db.push('Alfa1-Storage', ReplaceMeh9);
    db.push('Alfa1-Storage', ReplaceMeh10);
    db.push('Alfa1-Storage', ReplaceMeh11);
    db.push('Alfa1-Storage', ReplaceMeh12);

// Page 1
    if (`${args[0]} ${args[1]}` === `page 1`) {
    // Fetch Items
    db.fetch('Alfa1-Storage').then(i => { // Fetch the items array from the database + I MESSED UP HERE, THANKS TO `King Of Erangel✔🇲🇾🇮🇩#2769`
        let store1Embed = new discord.RichEmbed()
        .setAuthor(`Store Manager`, `${message.guild.iconURL}`) // REPLACE `ANIMEH PIC HERE` With A Pfp
        .setColor(`RED`)
        .setFooter(`Page 1 // Page 3`) 
        .addField(`${i[0].name}`, `${i[0].description}\nCurrently Costs: ${currencyFormatter.format(i[0].price, { code: 'EUR' })}`)
        .addField(`${i[1].name}`, `${i[1].description}\nCurrently Costs: ${currencyFormatter.format(i[1].price, { code: 'EUR' })}`)
        .addField(`${i[2].name}`, `${i[2].description}\nCurrently Costs: ${currencyFormatter.format(i[2].price, { code: 'EUR' })}`)
        .addField(`${i[3].name}`, `${i[3].description}\nCurrently Costs: ${currencyFormatter.format(i[3].price, { code: 'EUR' })}`)
        .addField(`${i[4].name}`, `${i[4].description}\nCurrently Costs: ${currencyFormatter.format(i[4].price, { code: 'EUR' })}`)
        .addField(`${i[5].name}`, `${i[5].description}\nCurrently Costs: ${currencyFormatter.format(i[5].price, { code: 'EUR' })}`)
        message.channel.send(store1Embed)
    })
// Page 2
 } else if (`${args[0]} ${args[1]}` === `page 2`) {
    db.fetch('Alfa1-Storage').then(i => { // Fetch the items array from the database
        let store2Embed = new discord.RichEmbed()
        .setAuthor(`Store Manager`, `${message.guild.iconURL}`) // REPLACE `ANIMEH PIC HERE` With A Pfp
        .setColor(`RED`)
        .setFooter(`Page 2 // Page 3`) 
        .addField(`${i[6].name}`, `${i[6].description}\nCurrently Costs: ${currencyFormatter.format(i[6].price, { code: 'EUR' })}`)
        .addField(`${i[7].name}`, `${i[7].description}\nCurrently Costs: ${currencyFormatter.format(i[7].price, { code: 'EUR' })}`)
        .addField(`${i[8].name}`, `${i[8].description}\nCurrently Costs: ${currencyFormatter.format(i[8].price, { code: 'EUR' })}`)
        .addField(`${i[9].name}`, `${i[9].description}\nCurrently Costs: ${currencyFormatter.format(i[9].price, { code: 'EUR' })}`)
        .addField(`${i[10].name}`, `${i[10].description}\nCurrently Costs: ${currencyFormatter.format(i[10].price, { code: 'EUR' })}`)
        .addField(`${i[11].name}`, `${i[11].description}\nCurrently Costs: ${currencyFormatter.format(i[11].price, { code: 'EUR' })}`)
        message.channel.send(store2Embed)
        })
// Page 3
 } else if (`${args[0]} ${args[1]}` === `page 3`) {
    db.fetch('Alfa1-Storage').then(i => { // Fetch the items array from the database
        let store3Embed = new discord.RichEmbed()
        .setAuthor(`Store Manager`, `${message.guild.iconURL}`) // REPLACE `ANIMEH PIC HERE` With A Pfp
        .setColor(`RED`)
        .setFooter(`Page 3 // Page 3`) 
        .addField(`To Be Developed + Extended`, `This Listing Is To Be Developed\nCurrently Costs: ${currencyFormatter.format(1000000, { code: 'EUR' })}`)
        .addField(`To Be Developed + Extended`, `This Listing Is To Be Developed\nCurrently Costs: ${currencyFormatter.format(1000000, { code: 'EUR' })}`)
        .addField(`To Be Developed + Extended`, `This Listing Is To Be Developed\nCurrently Costs: ${currencyFormatter.format(1000000, { code: 'EUR' })}`)
        .addField(`To Be Developed + Extended`, `This Listing Is To Be Developed\nCurrently Costs: ${currencyFormatter.format(1000000, { code: 'EUR' })}`)
        .addField(`To Be Developed + Extended`, `This Listing Is To Be Developed\nCurrently Costs: ${currencyFormatter.format(1000000, { code: 'EUR' })}`)
        .addField(`To Be Developed + Extended`, `This Listing Is To Be Developed\nCurrently Costs: ${currencyFormatter.format(1000000, { code: 'EUR' })}`)
        message.channel.send(store3Embed)
        })
 } else {return message.channel.send(`Please choose from \`page 1 - page 2 - page 3\``)}}*/
  message.channel.send(`Developer is working on it`)
}

module.exports.help = {
name: "shop",
usage: ">shop"
}