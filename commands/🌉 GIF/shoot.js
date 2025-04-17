const Discord = require("discord.js");

module.exports = {
  name: "shoot",
  description: "Shoot someone",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    const hello = new Discord.MessageEmbed()
      .setTitle("ʙᴏᴏᴍ")
      .setColor("BLUE")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://i.pinimg.com/originals/d4/48/1e/d4481e7b33c52da8a34e34037779f483.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello]})
    const embed = new Discord.MessageEmbed()
      .setTitle("ʙᴏᴏᴍ")
      .setColor("BLUE")
      .setDescription(`${message.author.username} ɪs sʜᴏᴏᴛɪɴɢ ${member.username}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://i.pinimg.com/originals/d4/48/1e/d4481e7b33c52da8a34e34037779f483.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}

