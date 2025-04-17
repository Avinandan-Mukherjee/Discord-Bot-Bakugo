const Discord = require("discord.js");

module.exports = {
  name: "ok",
  description: "Ok",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    const hello = new Discord.MessageEmbed()
      .setTitle("ᴏᴋ")
      .setColor("blue")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/HWdSvD9Wg20AAAAC/one-punch-man-ok.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello]})
    const embed = new Discord.MessageEmbed()
      .setTitle("ᴏᴋ")
      .setColor("blue")
      .setDescription(`${member.username} ᴏᴋ`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/HWdSvD9Wg20AAAAC/one-punch-man-ok.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}

