const Discord = require("discord.js");

module.exports = {
  name: "kill",
  description: "Kill someone",

  run: async (shooter, message, args) => {
    const member = message.mentions.users.first()
    const hello = new Discord.MessageEmbed()
      .setTitle("ᴛʜᴜɴᴅᴇʀᴄʟᴀᴘɪɴɢ ғʟᴀsʜ")
      .setColor("BLUE")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/uY-qorgOCPcAAAAC/matt-death-note.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()
    if (!member) return message.channel.send({embeds: [hello]})
    const embed = new Discord.MessageEmbed()
      .setTitle("ᴛʜᴜɴᴅᴇʀᴄʟᴀᴘɪɴɢ ғʟᴀsʜ")
      .setColor("blue")
      .setDescription(`${message.author.username} ᴋɪʟʟᴇᴅ ${member.username}`)
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://vignette.wikia.nocookie.net/demonslayer-anime/images/f/f3/Thunderclap_and_Flash.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}

