const Discord = require("discord.js");

module.exports = {
  name: "nuke",
  category: "moderation",
  description: "unbans member from a server",

  run : async (shooter, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You dont have the perms for the nuke command')
        

    // getting the channel's id that is gonna be nuked
    var channel = shooter.channels.cache.get(message.channel.id)

    // getting the position of the channel by the category
    var posisi = channel.position

   // clonning the channel
    channel.clone().then((channel2) => {
        
        // sets the position of the new channel
        channel2.setPosition(posisi)

        // deleting the nuked channel
        channel.delete()

        const gdm = new Discord.MessageEmbed()
        .setTitle("Successfully Nuked This channel.")
        .setColor("#28FF00")
        .setImage("https://gifimage.net/wp-content/uploads/2018/05/shinra-tensei-gif-6.gif")
        // sending a msg in the new channel
        channel2.send({embeds: [gdm]})
        
    })
  }
}