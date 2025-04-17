const Discord = require("discord.js");

module.exports = {
  name: "suggest",


  run: async (shooter, message, args) => {
    const owner = shooter.users.cache.get('616592839127728130');

    const suggest = args.join(" ");
    if(!suggest) return message.reply("Please specify a suggetion.");
    
    const gdm = new Discord.MessageEmbed()
    .setTitle("New Bug")
    .addField("Author", message.author.toString(), true)
    .addField("Server", message.guild.name, true)
    .addField("Bug", suggest)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
    .setTimestamp()    
    message.reply("Thank you for your suggetion")
    
    owner.send({embeds: [gdm]})
    }
}