const Discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kicks member from a server",

  run: async (shooter, message, args) => {
    if (message.channel.type === 'dm') return;

        if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ʀᴏʟᴇ ʜɪɢʜ ᴇɴᴏᴜɢʜ ᴛᴏ ᴋɪᴄᴋ ᴍᴇᴍʙᴇʀs")
        
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("ʏᴏᴜ ᴅᴏɴᴛ ʜᴀᴠᴇ ᴘᴇʀᴍɪssɪᴏɴs ᴛᴏ ᴋɪᴄᴋ ᴍᴇᴍʙᴇʀs")


    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!args[0]) return message.channel.send("ᴘʟs sᴘᴇᴄɪғʏ ᴀ ᴍᴇᴍʙᴇʀ ᴛᴏ ᴋɪᴄᴋ")

    if (!member) return message.channel.send("sᴏʀʀʏ ʙᴜᴛ I ᴄᴀɴᴛ ғɪɴᴅ ᴛʜɪs ᴜsᴇʀ")
    if (!member.kickable) return message.channel.send("ᴛʜɪs ᴍᴇᴍʙᴇʀ's ʀᴏʟᴇ ɪs ʜɪɢʜ ᴇɴᴏᴜɢʜ ғᴏʀ ᴍᴇ ᴛᴏ ᴋɪᴄᴋ")
    if (member.id === message.author.id) return message.channel.send("ʏᴏᴜ ᴄᴀɴᴛ ᴋɪᴄᴋ ʏᴏᴜʀsᴇʟғ :joy:")

    let reason = args.slice(1).join(" ");

    if (reason === undefined) reason = 'Unspecified';

  
     member.send('you are kicked.');

   
    member.kick(reason)
      .catch(err => {
        if (err) return message.channel.send("sᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ");
      })

    const kickembed = new Discord.MessageEmbed()
      .setTitle("Tʜᴀᴛ ᴍᴇᴍʙᴇʀ ɪs ᴋɪᴄᴋᴇᴅ")
      .setThumbnail(member.user.displayAvatarURL())
      .addField('ᴍᴇᴍʙᴇʀ ᴋɪᴄᴋᴇᴅ:', member)
      .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
      .addField('ᴋɪᴄᴋᴇᴅ ʙʏ:', message.author)
      .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
      .addField('ʀᴇᴀsᴏɴ:', reason || null)
      .setFooter('Time kicked', shooter.user.displayAvatarURL())
      .setTimestamp()
    message.channel.send({embeds: [kickembed]});


  }
}