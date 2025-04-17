const Discord = require("discord.js");

module.exports = {
  name: "resume",
  description: "Resume a song",

  run: async (shooter, message, args) => {
    if(!message.member.voice.channel) return message.reply({content: "You need to Join a Voice Channel first"})


    await shooter.distube.resume(message)
    const gdm = new Discord.MessageEmbed()
    .setDescription("▶️ Resuming the player.")
    .setColor("ff0033")
    await message.react("▶️")
    message.reply({embeds: [gdm] })
  }
}