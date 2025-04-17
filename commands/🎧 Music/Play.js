const Discord = require("discord.js");

module.exports = {
  name: "play",
  aliases: ["p"],
  description: "Play a song",

  run: async (shooter, message, args) => {
    if(!message.member.voice.channel) return message.reply({content: "You need to Join a Voice Channel first"})

    const music = args.join(" ")
    if(!music) return message.channel.send({content: "What is the name of the song?"})

    await shooter.distube.play(message, music)

  }
}