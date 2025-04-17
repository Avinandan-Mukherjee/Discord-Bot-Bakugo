const Discord = require("discord.js");

module.exports = {
  name: "ty",
  description: "Say thank you to someone",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    const hello = new Discord.MessageEmbed()
      .setTitle("ᴛʜᴀɴᴋ ʏᴏᴜ ꜱᴏ ᴍᴜᴄʜ")
      .setColor("blue")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/5MAd4MUpoeEAAAAC/my-hero-academia-boku-no-hero-academia.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello]})
    const embed = new Discord.MessageEmbed()
      .setTitle("ᴛʜᴀɴᴋ ʏᴏᴜ ꜱᴏ ᴍᴜᴄʜ")
      .setColor("blue")
      .setDescription(`${member.username} ᴛʜᴀɴᴋ ʏᴏᴜ sᴏ ᴍᴜᴄʜ`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/5MAd4MUpoeEAAAAC/my-hero-academia-boku-no-hero-academia.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({emneds: [embed]})
  }
}

