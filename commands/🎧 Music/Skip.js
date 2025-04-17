const Discord = require("discord.js");

module.exports = {
  name: "skip",
  description: "Skip a song",

  run: async (shooter, message, args) => {
    if(!message.member.voice.channel) return message.reply({content: "You need to Join a Voice Channel first"})



    await shooter.distube.skip(message)
        const gdm = new Discord.MessageEmbed()
    .setDescription("⏯️ Skipped current song.")
    .setColor("ff0033")
    await message.react("⏯️")
    message.reply({embeds: [gdm] }).catch(err => {
         if (err) {
           return message.channel.send({content: "Your queue is epmty." });
         }
    })
  }
}