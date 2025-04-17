const Discord = require("discord.js");

module.exports = {
  name: "hug",
  description: "Hug someone",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    let gif = ["https://c.tenor.com/xIuXbMtA38sAAAAd/toilet-bound-hanakokun.gif", "https://c.tenor.com/9e1aE_xBLCsAAAAM/anime-hug.gif", "https://c.tenor.com/z2QaiBZCLCQAAAAC/hug-anime.gif", "https://c.tenor.com/SPs0Rpt7HAcAAAAC/chiya-urara.gif", "https://c.tenor.com/xgVPw2QK5n8AAAAC/sakura-quest-anime.gif"]
    const hello = new Discord.MessageEmbed()
      .setTitle("ᴀᴡᴡᴡ")
      .setColor("blue")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello]})
    let hug = [`${message.author.username} ɪs ʜᴜɢɢɪɴɢ ${member.username}`, `${message.author.username} ᴅᴏɴᴛ ʜᴜɢ ${member.username} ᴛᴏᴏ ᴛɪɢʜᴛ`]
    const embed = new Discord.MessageEmbed()
      .setTitle("ᴀᴡᴡᴡ")
      .setColor("blue")
      .setDescription(`${hug[Math.floor(Math.random() * hug.length)]}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
  
    message.channel.send({embeds: [embed]})
  }
}

