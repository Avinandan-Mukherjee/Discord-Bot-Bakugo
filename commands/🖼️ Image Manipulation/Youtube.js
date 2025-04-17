const { shooter, Message, MessageAttachment } = require("discord.js");
const canvas = require("canvacord")


module.exports = {
  name: "youtube",
  category: "image manipulation",
  description: "youtube post",

  run: async (shooter, message, args) => {
    const member = message.author
//.youtube({ username, content, avatar, dark })

    const avatar = member.displayAvatarURL({ format: "png" })
    const name = member.username;
    const content = args.join(" ")


   const image = await canvas.Canvas.youtube({ username: name, content: content, avatar: avatar, dark: true }) 
    const atch = new MessageAttachment(image, "image.gif")

    message.channel.send({files: [atch]})
      
    
  }
}