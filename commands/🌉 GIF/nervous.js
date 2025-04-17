const Discord = require("discord.js");

module.exports = {
  name: "nervous",
  description: "Nervous",

  run: async (shooter, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("ᴜᴍᴍ")
      .setColor("BLUE")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setImage("https://c.tenor.com/VrfSZUjiWn4AAAAC/shy-anime.gif")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}

