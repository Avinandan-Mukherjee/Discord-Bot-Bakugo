const Discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",

  description: "Shows bot ping",

  run: async (shooter, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("Pong")
      .setDescription(`${shooter.ws.ping} ms`)
      .setColor("RANDOM")
      .setThumbnail(shooter.user.displayAvatarURL({ format: "png" }))
      .setTimestamp()

    message.channel.send({embeds: [embed]})
  }
}



