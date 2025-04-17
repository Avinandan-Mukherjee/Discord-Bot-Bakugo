const Discord = require("discord.js")
const ms = require('ms')

module.exports = {
  name : 'tempmute',
  
  run : async (shooter, message, args) => {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send("u don have perms")

    const nil = new Discord.MessageEmbed()
    .setTitle("ᴡʀᴏɴɢ ᴜsᴇ ᴏғ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ")
    .addField("**ᴄᴏʀʀᴇᴄᴛ ᴡᴀʏ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ:**", "`s!mute [@user] [time is s(seconds)]`")
    .addField("ғᴏʀ ᴇxᴀᴍᴘʟᴇ:", "`s!mute @GDM Sʜᴏᴏᴛᴇʀ ✓ 5s`")
    .addField("ᴏʀ ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴍᴜᴛᴇ ᴀ ᴍᴇᴍʙᴇʀ ᴡɪᴛʜᴏᴜᴛ ᴀɴʏ ᴛɪᴍᴇ ʟɪᴍɪᴛ:", "ᴅᴏ ᴛʜᴇ `s!mute` ᴄᴏᴍᴍᴀɴᴅ, ɴᴏᴛ `s!tempmute`")
    .setColor("BLUE")
    
  

    const gdm = new Discord.MessageEmbed()
    .setTitle("ᴡʀᴏɴɢ ᴜsᴇ ᴏғ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ")
    .addField("**ᴄᴏʀʀᴇᴄᴛ ᴡᴀʏ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ:**", "`s!mute [@user]`")
    .addField("ғᴏʀ ᴇxᴀᴍᴘʟᴇ:", "`s!mute @GDM Sʜᴏᴏᴛᴇʀ ✓`")
    .setColor("BLUE")
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const time = args[1]
        if (!args[0]) return message.reply({embeds: [nil]})
        if (!time) return message.reply({embeds: [nil]})
        if (!member) return message.reply("sᴏʀʀʏ ʙᴜᴛ I ᴄᴀɴᴛ ғɪɴᴅ ᴛʜɪs ᴜsᴇʀ")
        if (member.id === message.author.id) return message.reply("ʏᴏᴜ ᴄᴀɴᴛ ᴍᴜᴛᴇ ʏᴏᴜʀsᴇʟғ :joy:")

      const ijkl = new Discord.MessageEmbed()
        .setDescription('ᴄᴀɴɴᴏᴛ ғɪɴᴅ ᴛʜᴇ `ᴍᴜᴛᴇ` ʀᴏʟᴇ. ᴡᴀɪᴛ ɪ ᴀᴍ ᴛʀʏɪɴɢ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴏɴᴇ.')
        .setColor("BLUE")
        

        const mnop = new Discord.MessageEmbed()
        .addField('ᴄᴀɴɴᴏᴛ ғɪɴᴅ ᴛʜᴇ `ᴍᴜᴛᴇ` ʀᴏʟᴇ. ᴡᴀɪᴛ ɪ ᴀᴍ ᴛʀʏɪɴɢ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴏɴᴇ.', 'ᴍᴜᴛᴇ ʀᴏʟᴇ ɪs sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʀᴇᴀᴛᴇᴅ.')
        .setColor("BLUE")
        

        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
          try {
           const sentMessage = await message.channel.send({embeds: [ijkl]});

            let muterole = await message.guild.roles.create ({
              data : {
                name : 'muted',
                permissions: []

              }
            })
            message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id)=> {
              await channel.createOverwrite(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                VIEW_CHANNELS: true,
              })
            });
          

          setTimeout(() => sentMessage.edit({embeds: [mnop]}), 2000);
         

          }catch (error) {
            console.log(error)
          }
        }
        const abcd = new Discord.MessageEmbed()
        .setDescription(`<@${member.user.id}> ɪs ɴᴏᴡ ᴍᴜᴛᴇᴅ.`)
        .setColor("BLUE")

        const efgh = new Discord.MessageEmbed()
        .setDescription("ᴛʜɪs ᴍᴇᴍʙᴇʀ ɪs ᴀʟʀᴇᴀᴅʏ ᴍᴜᴛᴇᴅ.")
        .setColor("BLUE")


        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(member.roles.cache.has(role2.id)) return message.channel.send({embeds: [efgh]})
        await member.roles.add(role2)
        message.channel.send({embeds: [abcd]})

        const bil = new Discord.MessageEmbed()
        .setDescription(`<@${member.user.id}> ɪs ɴᴏᴡ ᴜɴᴍᴜᴛᴇᴅ.`)
        .setColor("BLUE") 

        setTimeout (async () => {
          await member.roles.remove(role2)
          message.channel.send(bil)
        }, ms(time))
 }
}
