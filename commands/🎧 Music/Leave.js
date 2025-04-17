const Discord = require("discord.js");

module.exports = {
  name: "leave",
  description: "Angry on someone",

  run: async (shooter, message, args) => {
    if(!message.member.voice.channel) return message.reply({content: "You need to Join a Voice Channel first"})


    await shooter.distube.stop(message)
    await message.react("👋")
    const gdm = new Discord.MessageEmbed()
    .setDescription("👋 I left the Voice Channel.")
    .setColor("#ff0033")
    message.reply({embeds: [gdm] }).catch(err => {
         if (err) {
           return message.channel.send({content: "Im currently not playing any songs." });
         }
    })
  }
}