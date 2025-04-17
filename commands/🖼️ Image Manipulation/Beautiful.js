const {shooter, Message, MessageAttachment} = require("discord.js");
const canvas = require("canvacord")


module.exports = {
  name: "beautiful",
  category: "image manipulation",
  description: "Triggered",

  run: async (shooter, message, args) => {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" })

    const image = await canvas.Canvas.beautiful(avatar)
    const atch = new MessageAttachment(image, "image.png")

    message.channel.send({files: [atch]})
      
    
  }
}