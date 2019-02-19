const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let pages = ['Fun\n\nDICEROLL: Usage: >diceroll\n\nCOINFLIP: Usage: >coinflip\n\nPING: Usage: >ping\n\nLEVEL: Usage: >level\n\nGIF: Usage: >gif [word here]\n\n8BALL: Usage: >8ball [question here]\n\nAVATAR: Usage: >avatar [@user]\n\nRPS: Usage: >rps [rock, paper or scissors]\n\nSHOOT: Usage: >shoot [@user]\n\nSNOWBALL: Usage: >snowball [@user]\n\nSLAP: Usage: >slap [@user]\n\nPIZZA: Usage: >pizza\n\nREVERSE: Usage: >reverse [message here]', 'YouTube\n\nANNOUNCE: Usage: >announce [message here]\n\nVIDEO: Usage: >video [link of the video here]', 'Info\n\nBOTINFO: Usage: >botinfo\n\nGUILDINFO: Usage: >guildinfo\n\nMEMBERINFO: Usage: >Memberinfo [@user]', 'Miscelaneous\n\nEMOJI: Usage: >emoji\n\nFINDUSERS: Usage: >findusers [letters here]\n\nINVITE: Usage: >invite\n\nINVITELEADERBOARD: Usage: >invitestats\n\nREPORT: Usage: >report [@user]\n\nSUGGEST: Usage: >suggest [idea here]\n\nSAY: Usage: >say [message here]', 'Announce\n\nANNOUNCE: Usage: >announce [message here]', 'Moderation\n\nADDROLE: Usage: >addrole [@user] [role name]\n\nREMOVEROLE: Usage: >removerole [@user] [role name]\n\nKICK: Usage: >kick [@user] [reason]\n\nSOFTBAN: Usage: >softban [@user] [reason]\n\nBAN: Usage: >ban [@user] [reason]\n\nTEMPMUTE: Usage: >tempmute [@user] [time]\n\nWARN: Usage: >warn [@user] [reason]\n\nWARNLEVEL: Usage: >warnlevel [@user]\n\nPURGE: Usage: >purge (@user) [amount of messages]\n\nBANLIST: Usage: >banlist', 'Owner\n\nEVAL: Usage: >eval [what to run]'];
  let page = 1; 
 
  const embed = new Discord.RichEmbed() 
    .setColor(0xffffff)
    .setFooter(`Page ${page} of ${pages.length}`) 
    .setDescription(pages[page-1])
    .setTimestamp()
 
  message.channel.send(`I have sent the help in your DMs!`);
  message.author.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter) //{ time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter) //{ time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`); 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`); 
        msg.edit(embed) 
      })
   
    })
 
  })
 
}


module.exports.help = {
    name: "help"
};