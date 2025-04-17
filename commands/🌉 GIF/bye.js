const Discord = require("discord.js");

module.exports = {
  name: "bye",
  description: "Sayonara",

  run: async (shooter, message, args, prefix) => {
    const member = message.mentions.users.first()
    let gif = ["https://c.tenor.com/H-NXH7iOy_gAAAAC/gojo-satoru-jujutsu-kaisen.gif", "https://c.tenor.com/_Exw4V_izbkAAAAC/cute-anime.gif", "https://c.tenor.com/sRKHQSK5hhEAAAAC/izaya-orihara.gif", "https://c.tenor.com/9QbNdvPAjY4AAAAC/wave-bye.gif", "https://c.tenor.com/1OKqJuV6Bn0AAAAC/anime-bye.gif", "https://c.tenor.com/_Zc9LQ9QtBsAAAAC/naruto-kakashi.gif"]
    const hello = new Discord.MessageEmbed()
      .setTitle("ʙʏᴇ ʙʏᴇ")
      .setColor("BLUE")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({ embeds: [hello] })
    const embed = new Discord.MessageEmbed()
      .setTitle("ʙʏᴇ ʙʏᴇ")
      .setColor("BLUE")
      .setDescription(`ʙʏᴇ ʙʏᴇ ${member.username}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [embed] })
  }
}

