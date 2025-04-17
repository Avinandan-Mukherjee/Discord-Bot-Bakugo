const Discord = require("discord.js");

module.exports = {
  name: "scnt",
  category: "info",
  description: "angry on someone",

  run: async (shooter, message, args) => {
    if (message.author.id !== '616592839127728130') return message.channel.send("sᴏʀʀʏ ʙᴜᴛ ᴏɴʟʏ GDM Sʜᴏᴏᴛᴇʀ ✓#9831 ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
    
      const hello = new Discord.MessageEmbed()
      .setTitle("Sᴇʀᴠᴇʀs ᴀᴅᴅᴇᴅ ᴍᴇ")
      .setColor("BLUE")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setDescription(`${shooter.guilds.cache.size
}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
      message.channel.send({embeds: [hello]})
  }
}

      