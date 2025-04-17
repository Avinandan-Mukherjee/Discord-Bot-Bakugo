const Discord = require("discord.js");

module.exports = {
  name: "stomp",
  description: "Stomp someone",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    const hello = new Discord.MessageEmbed()
      .setTitle("ᴅɪᴇᴇᴇᴇ")
      .setColor("blue")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/D67kRWw_cEEAAAAC/voz-dap-chym-dap-chym.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello]})
    const embed = new Discord.MessageEmbed()
      .setTitle("ᴅɪᴇᴇᴇᴇ")
      .setColor("blue")
      .setDescription(`${message.author.username} ɪs sᴛᴏᴍᴘɪɴɢ ${member.username}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/D67kRWw_cEEAAAAC/voz-dap-chym-dap-chym.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}

