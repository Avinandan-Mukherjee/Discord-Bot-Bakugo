const Discord = require("discord.js");

module.exports = {
  name: "slap",
  description: "Slap someone",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    const hello = new Discord.MessageEmbed()
      .setTitle("ʙᴀᴋᴀ")
      .setColor("blue")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/E3OW-MYYum0AAAAC/no-angry.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello]})
    const embed = new Discord.MessageEmbed()
      .setTitle("ʙᴀᴋᴀ")
      .setColor("blue")
      .setDescription(`${message.author.username} ɪs sʟᴀᴘᴘɪɴɢ ${member.username}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/E3OW-MYYum0AAAAC/no-angry.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}

