const {shooter, Message, MessageAttachment} = require("discord.js");
const canvas = require("canvacord")


module.exports = {
  name: "hit",
  category: "image manipulation",
  description: "Triggered",

  run: async (shooter, message, args) => {
 const [_u1, _u2] = [...message.mentions.users.values()]; 
const u1 = _u2 ? _u1 : message.author;
const u2 = _u2 ?? _u1;

    const avatar = u1.displayAvatarURL({ format: "png" })
const av2 = u2.displayAvatarURL({ format: "png" })
    const image = await canvas.Canvas.slap(avatar, av2)
    const atch = new MessageAttachment(image, "image.png")

    message.channel.send({files: [atch]})
      
    
  }
}