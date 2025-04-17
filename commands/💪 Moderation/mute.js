const Discord = require("discord.js")
const ms = require('ms')

module.exports = {
  name : 'mute',
  
  run : async (shooter, message, args) => {


    const gdm = new Discord.MessageEmbed()
    .setTitle("ᴡʀᴏɴɢ ᴜsᴇ ᴏғ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ")
    .addField("**ᴄᴏʀʀᴇᴄᴛ ᴡᴀʏ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ:**", "`s!mute [@user]`")
    .addField("ғᴏʀ ᴇxᴀᴍᴘʟᴇ:", "`s!mute @GDM Sʜᴏᴏᴛᴇʀ ✓`")
    .setColor("BLUE")
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
        if (!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply({content: "ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ᴀᴅᴍɪɴɪsᴛʀᴀᴛᴏʀ ʀᴏʟᴇ ᴛᴏ ᴍᴜᴛᴇ ᴍᴇᴍʙᴇʀs."})

       if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply({content: "ʏᴏᴜ ᴅᴏɴᴛ ʜᴀᴠᴇ ᴘᴇʀᴍɪssɪᴏɴs ᴛᴏ ᴍᴜᴛᴇ sᴏᴍᴇᴏɴᴇ."}) 

       
        
        if (!args[0]) return message.channel.send({embeds: [gdm]})
        if (!member) return message.reply({content: "sᴏʀʀʏ ʙᴜᴛ I ᴄᴀɴᴛ ғɪɴᴅ ᴛʜɪs ᴜsᴇʀ"})

        if (member.id === message.author.id) return message.reply({content: "ʏᴏᴜ ᴄᴀɴᴛ ᴍᴜᴛᴇ ʏᴏᴜʀsᴇʟғ :joy:"})

      const ijkl = new Discord.MessageEmbed()
        .setDescription('ᴄᴀɴɴᴏᴛ ғɪɴᴅ ᴛʜᴇ `ᴍᴜᴛᴇ` ʀᴏʟᴇ. ᴡᴀɪᴛ ɪ ᴀᴍ ᴛʀʏɪɴɢ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴏɴᴇ. <a:loading:900297495375142953>')
        .setColor("BLUE")
        

        const mnop = new Discord.MessageEmbed()
        .addField('ᴄᴀɴɴᴏᴛ ғɪɴᴅ ᴛʜᴇ `ᴍᴜᴛᴇ` ʀᴏʟᴇ. ᴡᴀɪᴛ ɪ ᴀᴍ ᴛʀʏɪɴɢ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴏɴᴇ.', 'ᴍᴜᴛᴇ ʀᴏʟᴇ ɪs sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʀᴇᴀᴛᴇᴅ. <a:successful:900336906204745778>')
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
                VIEW_CHANNELS: true
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
         .catch(err => {
         if (err) {
           return message.channel.send({content: "Cannot mute this user. He is a mod."});
         } else if (!err) {
        message.channel.send({embeds: [abcd]})
         }
 }) 

 
 }
}
