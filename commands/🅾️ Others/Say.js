const Discord = require("discord.js");

module.exports = {
  name: "say",
  category: "info",

  description: "Roll a dice",

  run: async (shooter, message, args) => {
    const say = args.join(" ")
    if(!say) message.reply({ content: "What to say?" })
    message.channel.send({content: `${say}` })
  }
}