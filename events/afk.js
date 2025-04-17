const Discord = require("discord.js");
const { afk } = require("../Collection");
const shooter = require("../index");
const moment = require("moment");
shooter.on('messageCreate', async(message) => {
  if(!message.guild || message.author.bot) return;

  const mentionedMember = message.mentions.members.first();
  if (mentionedMember) {
    const data = afk.get(mentionedMember.id);

    if (data) {
      const [ timestamp, reason ] = data;
      const timeAgo = moment(timestamp).fromNow();

      const gdm = new Discord.MessageEmbed()
      .setDescription(`${mentionedMember.user.username} ɪs ɴᴏᴡ ᴀғᴋ.`)
      .addField(`Time:`, `${timeAgo}`)
      .addField(`Reason:`, ` ${reason}`)
      .setColor("GREEN")
      .setFooter('ᴛʜᴀɴᴋ ʏᴏᴜ ғᴏʀ ᴜsɪɴɢ ᴍᴇ', shooter.user.displayAvatarURL())
    .setTimestamp()

      message.reply({embeds: [gdm]})
    }
  }
    
  const getData = afk.get(message.author.id);
  if(getData) {
    afk.delete(message.author.id);
    message.channel.send({content: `Welcome back ${message.member} .I removed your afk status.`}).then(x => {

       setTimeout(async () => {
         x.delete()
         
       }, 6000)
			return;
			})
  }
})
