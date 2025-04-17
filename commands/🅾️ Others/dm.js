const Discord = require("discord.js");

module.exports = {
  name: "dm",
  category: "info",

  description: "DM someone",

  run: async (shooter, message, args) => {
const member = message.mentions.users.first()
    if (!member) return message.reply({content: "Whom to dm?"})
    const say = args.slice(1).join(' ');
    if(!say) message.reply({ content: "What to dm him?" })
    const gdm = new Discord.MessageEmbed()
.setTitle("Got a message for you")
    .setDescription(`Message: ${say}\nSent From: ${message.author.username}`)
    .setColor(`#00F5FF`)
    member.send({embeds: [gdm] })
    message.reply({content: "Successfully sent"})
  }
}