const Discord = require("discord.js");

module.exports = {
  name: "roll",
  category: "info",

  description: "Roll a dice",

  run: async (shooter, message, args) => {
    const gdm = new Discord.MessageEmbed()
    .setTitle("Roll a dice")
    .setDescription("Rolling the dice <a:loading:900297495375142953>")

    const nil = new Discord.MessageEmbed()
    .setTitle("Roll a dice")
    .setDescription("Succesfully rolled the dice.\n[Click here to see the result](https://youtu.be/dQw4w9WgXcQ)")

    const sentMessage = await message.channel.send({embeds: [gdm]})

    setTimeout(() => sentMessage.edit({embeds: [nil]}), 3000);
  }
}