const Discord = require("discord.js");
let memberJoinGuild = "791677949304504330";
let memberLeftGuild = "794106656588824577";

function welcomechannelId(){
shooter.on('guildMemberAdd', async (member) => {
   let gdm = new Discord.MessageEmbed()
   .setTitle(`Wᴇʟᴄᴏᴍᴇ ᴛᴏ ${member.guild.name}`)
   .setColor("BLUE")
   .setThumbnail('https://c.tenor.com/CBxyvlf0CMoAAAAC/welcome-anime.gif')
   .setDescription(`Hᴇʟʟᴏ <@${member.user.id}>. ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴏᴜʀ sᴇʀᴠᴇʀ. ᴛʜᴀɴᴋs ᴀ ʟᴏᴛ ғᴏʀ ᴊᴏɪɴɪɴɢ. ғᴏʟʟᴏᴡ ᴛʜᴇ ʀᴜʟᴇs. ʜᴏᴘᴇ ʏᴏᴜ ᴇɴᴊᴏʏ ʜᴇʀᴇ.`)
   .setImage(member.user.displayAvatarURL({dynamic: true, size: 512, format: "png"}))
   .setFooter('ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ᴍᴇ', shooter.user.displayAvatarURL({dynamic: true, size: 512}))
   .setTimestamp()
   const channel = member.guild.channels.cache.get(channelId)
   channel.send({embeds: [gdm]}).catch(err => {
        console.log(err);
  })
})
}
function leavechannelId(channelId){
shooter.on('guildMemberRemove', async (member) => {
let embed = new Discord.MessageEmbed()
  .setTitle('Bʏᴇ Bʏᴇ')
  .setDescription((`${member.user.username} ᴊᴜsᴛ ʟᴇғᴛ ᴛʜᴇ sᴇʀᴠᴇʀ. ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ. ʜᴏᴘᴇ ${member} ᴄᴏᴍᴇs ʙᴀᴄᴋ.`))
  .setImage("https://c.tenor.com/JBk9jiJPiP0AAAAd/sad-wave-crying.gif")
  .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512, format: "png"}))
  .setFooter('ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ ᴍᴇ', shooter.user.displayAvatarURL({dynamic: true, size: 512}))
  .setTimestamp()
const channel = member.guild.channels.cache.get(channelId)
channel.send({embeds: [embed]}).catch((err) => {
  console.log(err)
})
})
}
module.exports = (shooter) => {
  welcomechannelId(memberJoinGuild);
  leavechannelId(memberLeftGuild);
}