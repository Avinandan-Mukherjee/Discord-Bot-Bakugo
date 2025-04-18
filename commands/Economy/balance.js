const Discord = require("discord.js");

module.exports = {
  name: 'bal',
  run: async (shooter, message, args) => {
    const member = message.mentions.users.first() || message.author;

    const bal = await shooter.bal(member.id);

    const gdm = new Discord.MessageEmbed()
      .setTitle('Wᴀʟʟᴇᴛ')
      .setDescription(`${member.username}'s ʙᴀʟᴀɴᴄᴇ`)
      .addField(`<:coins:900597221102333982> ${bal} Cᴏɪɴs`, `<:VoteCoins:900654585784463421> 0 Vᴏᴛᴇ Cᴏɪɴs`)
      .setColor("BLUE")
      .setFooter('Tʜᴀɴᴋ ʏᴏᴜ ғᴏʀ ᴜsɪɴɢ ᴍᴇ', shooter.user.displayAvatarURL())
      .setTimestamp()
    message.channel.send(gdm)
  }
}
