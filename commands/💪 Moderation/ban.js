const Discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Bans member from a server",

  run: async (shooter, message, args) => {
    if (message.channel.type === 'dm') return;
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("ʏᴏᴜ ᴅᴏɴᴛ ʜᴀᴠᴇ ᴘᴇʀᴍɪssɪᴏɴs ᴛᴏ ʙᴀɴ ᴍᴇᴍʙᴇʀs")
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ʀᴏʟᴇ ʜɪɢʜ ᴇɴᴏᴜɢʜ ᴛᴏ ʙᴀɴ ᴍᴇᴍʙᴇʀs")

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!args[0]) return message.channel.send("ᴘʟs sᴘᴇᴄɪғʏ ᴀ ᴍᴇᴍʙᴇʀ ᴛᴏ ʙᴀɴ")

    if (!member) return message.channel.send("sᴏʀʀʏ ʙᴜᴛ I ᴄᴀɴᴛ ғɪɴᴅ ᴛʜɪs ᴜsᴇʀ")
    if (!member.kickable) return message.channel.send("ᴛʜɪs ᴍᴇᴍʙᴇʀ's ʀᴏʟᴇ ɪs ʜɪɢʜ ᴇɴᴏᴜɢʜ ғᴏʀ ᴍᴇ ᴛᴏ ʙᴀɴ")
    if (member.id === message.author.id) return message.channel.send("ʏᴏᴜ ᴄᴀɴᴛ ʙᴀɴ ʏᴏᴜʀsᴇʟғ :joy:")

    let reason = args.slice(1).join(" ");

    if (reason === undefined) reason = 'Unspecified';

     member.ban({ reason: reason })
      .catch(err => {
        if (err) return message.channel.send("sᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ");
      })

    const banembed = new Discord.MessageEmbed()
      .setTitle("Tʜᴀᴛ ᴍᴇᴍʙᴇʀ ɪs ʙᴀɴɴᴇᴅ")
      .setThumbnail(member.user.displayAvatarURL())
      .addField('ᴍᴇᴍʙᴇʀ ʙᴀɴɴᴇᴅ:', member)
      .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
      .addField('ʙᴀɴɴᴇᴅ ʙʏ:', message.author)
      .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
      .addField('ʀᴇᴀsᴏɴ:', reason || null)
      .setFooter('Time banned', shooter.user.displayAvatarURL())
      .setTimestamp()
    message.channel.send({embeds: [banembed]});


  }
}