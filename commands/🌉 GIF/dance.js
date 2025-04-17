const Discord = require("discord.js");

module.exports = {
  name: "dance",
  description: "Dance with someone",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    let gif = ["https://c.tenor.com/7J5qrMbAAAYAAAAd/zero-two-dance.gif", "https://c.tenor.com/DbRUHnh1JfsAAAAM/chika-chika-dance.gif", "https://c.tenor.com/cglS81TpHAIAAAAd/rainbow-anime.gif", "https://c.tenor.com/15NLF1281h8AAAAd/anime-dance.gif", "https://c.tenor.com/BrCcrHCNYt8AAAAC/naruto-dancing.gif", "https://c.tenor.com/llIEL86XtLYAAAAC/dance-durarara.gif", "https://c.tenor.com/TVFrC38WTRQAAAAC/celebrate-shinkoukei.gif"]
    const hello = new Discord.MessageEmbed()
      .setTitle("ᴅᴀɴᴄᴇ ᴅᴀɴᴄᴇ ᴅᴀɴᴄᴇ")
      .setColor("blue")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello] })
    let dance = [`${message.author.username} ɪs ᴅᴀɴᴄɪɴɢ ᴡɪᴛʜ ${member.username}`, `${message.author.username}  ᴅᴏɴᴛ ʙʀᴇᴀᴋ ᴛʜᴇ ғʟᴏᴏʀ`]
    const embed = new Discord.MessageEmbed()
      .setTitle("ᴅᴀɴᴄᴇ ᴅᴀɴᴄᴇ ᴅᴀɴᴄᴇ")
      .setColor("blue")
      .setDescription(`${dance[Math.floor(Math.random() * dance.length)]}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}

