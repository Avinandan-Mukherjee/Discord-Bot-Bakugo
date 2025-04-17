const Discord = require('discord.js')

module.exports=  {
    name : 'unmute', 

    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

      const nil = new Discord.MessageEmbed()
     .setTitle("ᴡʀᴏɴɢ ᴜsᴇ ᴏғ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ")
     .addField("**ᴄᴏʀʀᴇᴄᴛ ᴡᴀʏ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ:**", "`s!unmute [@user]`")
     .addField("ғᴏʀ ᴇxᴀᴍᴘʟᴇ:", "`s!unmute @GDM Sʜᴏᴏᴛᴇʀ ✓`")
     .setColor("BLUE")

        if (!args[0]) return message.channel.send(nil)
        if (Member.id === message.author.id) return message.channel.send("ʏᴏᴜ ᴄᴀɴᴛ ᴍᴜᴛᴇ ʏᴏᴜʀsᴇʟғ :joy:")

       const gdm = new Discord.MessageEmbed()
       .setDescription(`<@${Member.user.id}> ɪs ɴᴏᴡ ᴜɴᴍᴜᴛᴇᴅ`)
       .setColor("BLUE")


        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send({embeds: [gdm]})
    }
} 
