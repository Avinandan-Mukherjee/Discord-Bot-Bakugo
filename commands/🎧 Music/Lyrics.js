const Discord = require("discord.js");
const lyrics = require("findthelyrics");
module.exports = {
  name: "lyrics",
  aliases: ["l"],
  run: async (shooter, message, args) => {

    const wrong = new Discord.MessageEmbed()
    .setTitle("Wrong use of the command")
    .addField("**Correct way to use this command**", "`s!lyriics [song name]`")
    .addField("For example", "`s!lyrics Arcade`")
    .setColor("#89FFF5")

    const nil = args.join(" ")
    if(!nil) return message.reply({ embeds: [wrong] })


    let find = lyrics.find(nil, function(err, resp){

      if(!err) {
        const gdm = new Discord.MessageEmbed()
        .setTitle("Lyrics")
        .setDescription(`${resp.replace(",", " ")}`)
        .setColor("#E30000")
      message.channel.send({ embeds: [gdm]  })
      } else {
        message.channel.send({content: "An error occured. Please try again."})
      }
    })
  }
}