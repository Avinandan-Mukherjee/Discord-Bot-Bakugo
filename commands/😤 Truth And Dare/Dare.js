const Discord = require("discord.js");

module.exports = {
  name: "dare",
  description: "Daring dares",

  run: async (shooter, message, args) => {
    let dares = ["Tell ur friend that you love him and wanna marry him/her.", "Do your Face reveal.", "Be the slave of the next person message here for 5 minutes.", "Change your profile picture to what the others want.", "Send the most embarrassing photo in your gallery", "Block the first person in your DM for 24 hours.", "Show your browsing history"]


    const gdm = new Discord.MessageEmbed()
    .setTitle(`${dares[Math.floor(Math.random() * dares.length)]}`)
    .setDescription("I dare you to complete this dare. Else you lose to a bot like me.")
    .setColor("#2DE4FF")
      .setTimestamp()
      message.channel.send({ embeds: [gdm] })
  }
}