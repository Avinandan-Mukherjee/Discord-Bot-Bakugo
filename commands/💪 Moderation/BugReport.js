const Discord = require("discord.js");

module.exports = {
  name: "report",


  run: async (shooter, message, args) => {
    const owner = shooter.users.cache.get('616592839127728130');

    const report = args.join(" ");
    if(!report) return message.reply("Please specify a bug.");


    
    const gdm = new Discord.MessageEmbed()
    .setTitle("New Bug")
    .addField("Author", message.author.toString(), true)
    .addField("Server", message.guild.name, true)
    .addField("Bug", report)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
    .setTimestamp()   

    const abcd = new Discord.MessageEmbed()
    .setDescription("Your report is successfully sent to the mod")
    .setColor("#FFFD85")
  message.reply({embeds: [abcd]}) 
    
    owner.send({embeds: [gdm]})
    }
}