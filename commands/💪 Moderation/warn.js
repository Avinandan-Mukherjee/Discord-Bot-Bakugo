const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name :'warn',

    run : async(shooter, message, args) => {
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ") || "no reason provided."
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });

        const nil = new MessageEmbed()
         .setDescription(`Cannot DM  ${user}`)
         .setColor('BLUE')
        const gdm = new MessageEmbed()
           .setDescription(`You have been warned for ${reason}`)
            .setColor("RED")
        user.send(gdm)
      .catch(err => {
        if (err) return  message.channel.send({embeds: [nil]})
  
      })
        
      
        
          const hi = new MessageEmbed()
            .setDescription(`Warned ${user} for ${reason}`)
            .setColor('BLUE')
            message.channel.send({embeds: [hi]})
        
    }
    }