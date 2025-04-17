const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name :'warns',

    run : async(shooter, message, args) => {
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
 

              if(!data) return message.channel.send(`No warns`)            

            const desc = (data.content.map(
                            (w, i) => 
                            `\`${i + 1}\` | Moderator : ${message.guild.members.cache.get(w.moderator).user.tag}\nReason : ${w.reason}`)) 


            const abcd = new MessageEmbed()
            .setTitle(`${user.user.tag}'s warns`)
            .setDescription("NO DATA")
            .setColor("BLUE")


            const gdm = new MessageEmbed()
            .setTitle(`${user.user.tag}'s warns`)
            .setDescription(`${desc}`)
            .setColor("BLUE")


            
            if(data) {
                message.channel.send({embeds: [gdm]})
  
                        
                
                
            } 
            

        })
    }
}