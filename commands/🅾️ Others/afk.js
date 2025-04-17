const Discord = require("discord.js");
const { afk } = require("../../Collection");
module.exports = {
  name: "afk",
   run: async (shooter, message, args) => {
     const reason = args.join(" ") || "No reason provided."

     afk.set(message.author.id, [Date.now(), reason]);

      const embed = new Discord.MessageEmbed()
       .setDescription(`Yᴏᴜ ᴀʀᴇ ɴᴏᴡ ᴀғᴋ.\nRᴇᴀsᴏɴ: ${reason}`)
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        .setFooter('ᴛʜᴀɴᴋ ʏᴏᴜ ғᴏʀ ᴜsɪɴɢ ᴍᴇ', shooter.user.displayAvatarURL())
       .setTimestamp()
        message.channel.send({embeds: [embed]}) 

   }
}