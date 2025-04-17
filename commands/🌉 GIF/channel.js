const Discord = require("discord.js");

module.exports = {
  name: "channel",
  description: "Sends my youtube channel",

  run: async (shooter, message, args) => {
    const hello = new Discord.MessageEmbed()
   .setAuthor("YouTube")
    .setTitle("GDM Shooter")
    .setDescription("[Please Subscribe](https://youtu.be/dQw4w9WgXcQ)")
    .setImage("https://yt3.ggpht.com/ytc/AKedOLTO-QQizDj42KOVVk-C4Ptux9yJMe3IrCuGVjyz=s900-c-k-c0x00ffffff-no-rj")
    .setColor("#FF0000")
  

    message.channel.send({content: "https://youtu.be/lpiB2wMc49g", embeds: [hello] })
  }
}