const Discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",

  description: "sends invite link for bot",

  run: async (shooter, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("ɪɴᴠɪᴛᴇ")
      .setColor("BLUE")
      .setThumbnail(shooter.user.displayAvatarURL)
      .setDescription("[ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ ɪɴᴠɪᴛᴇ ᴍᴇ](https://discord.com/api/oauth2/authorize?client_id=887718091054788648&permissions=8&scope=bot%20applications.commands)")
      .setFooter(`Tʜᴀɴᴋ Yᴏᴜ ғᴏʀ Usɪɴɢ Mᴇ`)
      .setTimestamp()

      const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
      .setLabel("Join my server")
      .setURL("https://discord.gg/tG3aAq8Fwv")
      .setStyle("LINK"),
      
      
    )

    message.channel.send({embeds: [embed], components: [row]})
  }
}

