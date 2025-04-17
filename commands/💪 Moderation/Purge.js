const Discord = require("discord.js");

module.exports = {
    name : "purge",
    description: "deletes messages",

    run : async(client, message, args) => {
      if (!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply({content: "Please give me administrator perms first."})
        if(!args[0]) return message.reply({content: 'Please specify a number of messages to delete ranging from 1 - 99'})
        if(isNaN(args[0])) return message.reply({content: 'Numbers are only allowed'})
        if(parseInt(args[0]) > 99) return message.reply({content: 'The max amount of messages that I can delete is 99'})
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))

          

            const gdm = new Discord.MessageEmbed()
            .setDescription(' Successfully deleted ' + `${args[0]}`  + " messages.")
            .setColor("BLUE")
        message.channel.send({embeds: [gdm]})
    }
}