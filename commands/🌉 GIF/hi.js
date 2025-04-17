const Discord = require("discord.js");

module.exports = {
  name: "hi",
  description: "Says hello back",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    let gif = ["https://c.tenor.com/CRIBvuldaiMAAAAC/hi-cute.gif", "https://c.tenor.com/ESVgd3T5YlcAAAAC/demon-slayer-anime.gif", "https://c.tenor.com/6Gr-6QEvE7EAAAAd/school-live-cute.gif", "https://c.tenor.com/OSnZnnqx4vsAAAAC/anime-hello.gif", "https://c.tenor.com/thNxDWlG1EcAAAAd/killua-zoldyck-anime.gif", "https://c.tenor.com/XjkKwpMXmwMAAAAC/yo-hi.gif"]
    const hello = new Discord.MessageEmbed()
      .setTitle("ʜᴇʟʟᴏ")
      .setColor("blue")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello]})
     let hi = [`${message.author.username} ɪs ᴡᴀᴠɪɴɢ ᴀᴛ ${member.username}`, `${member.username} ʜɪ!!`]
    const embed = new Discord.MessageEmbed()
      .setTitle("ʜᴇʟʟᴏ")
      .setColor("blue")
      .setDescription(`${hi[Math.floor(Math.random() * hi.length)]}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}

