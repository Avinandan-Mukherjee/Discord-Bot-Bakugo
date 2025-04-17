const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "info",  
  description: "angry on someone",

  run: async (shooter, message, args) => {
    let member = message.mentions.users.first() || message.author
    let gdm = member.displayAvatarURL({size: 2048, dynamic: true})

    const hello = new Discord.MessageEmbed()

      .setAuthor(member.tag, member.displayAvatarURL({ dynamic : true }))

      .setColor("#343c3c")
      .setImage(gdm)
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

    message.channel.send({embeds: [hello]})
  }
}

