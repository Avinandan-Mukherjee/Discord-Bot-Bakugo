const Discord = require("discord.js");
const shooter = require("../index");

//welcome dm



shooter.on('guildMemberAdd', async (member) => {
  let gdm = new Discord.MessageEmbed()
  .setTitle('Wᴇʟᴄᴏᴍᴇ ᴛᴏ ᴏᴜʀ sᴇʀᴠᴇʀ')
  .setColor('#C200FF')
  .setDescription('ʜᴇʟʟᴏ I ᴀᴍ Sʜᴏᴏᴛᴇʀ. A ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ GDM Sʜᴏᴏᴛᴇʀ ✓#9831. I ᴀᴍ ᴀ ғᴜɴ ᴀɴᴅ ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ʙᴏᴛ. Iғ ʏᴏᴜ ᴡᴀɴᴛ ʏᴏᴜ ᴄᴀɴ ɪɴᴠɪᴛᴇ ᴍᴇ ᴛᴏ ʏᴏᴜʀ sᴇʀᴠᴇʀ. I ᴡɪʟʟ ʙᴇ ɢʟᴀᴅ ɪғ ʏᴏᴜ ɪɴᴠɪᴛᴇ ᴍᴇ.  Tʜᴀɴᴋ ʏᴏᴜ ʜᴀᴠᴇ ғᴜɴ ᴀɴᴅ ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ..')
  .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512, format: "png"}))
 .setFooter('ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ᴍᴇ', shooter.user.displayAvatarURL({dynamic: true, size: 512}))
  .setTimestamp() 

  const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
      .setLabel("Invite Me!")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=887718091054788648&permissions=8&scope=bot%20applications.commands")
      .setStyle("LINK"),

  )

member.send({embeds: [gdm], components: [row]})

  

//leave dm

shooter.on('guildMemberRemove', async (member) => {

  let abcd = new Discord.MessageEmbed()
  .setTitle("Fᴀʀᴇᴡᴇʟʟ")
  .setDescription('ʏᴏᴜ ᴊᴜsᴛ ʟᴇғᴛ ᴏᴜʀ sᴇʀᴠᴇʀ. ɪғ ᴛʜᴇʀᴇ ᴡᴀs ᴀɴʏ ᴘʀᴏʙʟᴇᴍ, ᴘʟᴇᴀsᴇ ʟᴇᴛ ᴜs ᴋɴᴏᴡ. ᴏʀ ɪғ ʏᴏᴜ ᴡᴀɴᴛ, ʏᴏᴜ ᴄᴀɴ ᴄᴏᴍᴇ ʙᴀᴄᴋ ᴀɴʏᴛɪᴍᴇ ᴛᴏ ᴏᴜʀ sᴇʀᴠᴇʀ ᴀɴʏᴛɪᴍᴇ. ʜᴀᴠᴇ ᴀ ɢʀᴇᴀᴛ ᴅᴀʏ.')
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512, format: "png"}))
    .setColor("#ADADAD")
   .setFooter('ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ᴍᴇ', shooter.user.displayAvatarURL({dynamic: true, size: 512}))
  .setTimestamp() 

  const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
      .setLabel("Invite Me!")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=887718091054788648&permissions=8&scope=bot%20applications.commands")
      .setStyle("LINK"),
      
      new Discord.MessageButton()
      .setLabel("Join my server")
      .setURL("https://discord.gg/tG3aAq8Fwv")
      .setStyle("LINK"),

  )

 await member.send({embeds: [abcd], components: [row]}).catch(err => {
        if (err) console.log(err);
  })
})
})
