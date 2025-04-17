const Discord = require("discord.js");

module.exports = {
  name: "stab",
  description: "Stab someone",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    const hello = new Discord.MessageEmbed()
      .setTitle("ᴅɪᴇᴇᴇᴇ")
      .setColor("GREEN")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/Ky24tRXzGIAAAAAC/excel-saga-stabby-stab-stab.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello]})
    const embed = new Discord.MessageEmbed()
      .setTitle("ᴅɪᴇᴇᴇᴇ")
      .setColor("GREEN")
      .setDescription(`${message.author.username} sᴛᴀʙʙᴇᴅ ${member.username}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/Ky24tRXzGIAAAAAC/excel-saga-stabby-stab-stab.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}

