const Discord = require("discord.js");

module.exports = {
  name: "angry",
  description: "Angry on someone",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    let gif = ["https://c.tenor.com/X3x3Y2mp2W8AAAAS/anime-angry.gif", "https://c.tenor.com/2uSb2XPxYNUAAAAC/mad-angry.gif", "https://c.tenor.com/W9kzAnY4pQoAAAAd/ram-anime.gif", "https://c.tenor.com/7dqHXNcKYPsAAAAC/bnha-bakugo.gif", "https://c.tenor.com/1Tmm4et0npoAAAAd/tanjiro-angry.gif", "https://c.tenor.com/B8FUd2Vu_EIAAAAM/naruto-rage.gif"];
    const hello = new Discord.MessageEmbed()
      .setTitle("I ᴡɪʟʟ ᴋɪʟʟ ʏᴏᴜ")
      .setColor("BLUE")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({ embeds: [hello] })
    let angry = [`${message.author.username} ɪs ᴀɴɢʀʏ ᴏɴ ${member.username}`, `ᴏᴍᴀᴇ ᴡᴀ ᴍᴏᴜ sʜɪɴᴅᴇɪʀᴜ ${member.username}`]
    const embed = new Discord.MessageEmbed()
      .setTitle("I ᴡɪʟʟ ᴋɪʟʟ ʏᴏᴜ")
      .setColor("BLUE")
      .setDescription(`${angry[Math.floor(Math.random() * angry.length)]}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({ embeds: [embed] })
  }
}

