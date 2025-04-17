const Discord = require("discord.js");

module.exports = {
  name: "pause",
  description: "Angry on someone",

  run: async (shooter, message, args) => {
    if(!message.member.voice.channel) return message.reply({content: "join a vc first"})


    await shooter.distube.pause(message)
    const gdm = new Discord.MessageEmbed()
    .setDescription("⏸️ Paused the player.\nType `s!resume` to continue.")
    .setColor("ff0033")
    await message.react("⏸️")
    message.reply({embeds: [gdm] })
  }
}