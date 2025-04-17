const Discord = require("discord.js");

module.exports = {
  name: "truth",
  description: "Truth questions",

  run: async (shooter, message, args) => {
    let truth = ["Do you have any gf or bf?", "In which subject you got least number?", "Who do you hate the most and why?", "Have ever get lost somewhere?" ]

    const gdm = new Discord.MessageEmbed()
    .setTitle(`${truth[Math.floor(Math.random() * truth.length)]}`)
    .setDescription("Tell the truth. Dont lie.")
    .setColor("#2DE4FF")
      .setTimestamp()
      message.channel.send({ embeds: [gdm] })
  }
}