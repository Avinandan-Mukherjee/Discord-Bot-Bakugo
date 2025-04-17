const Discord = require("discord.js");

module.exports = {
  name: "filter",
  description: "Angry on someone",

  run: async (shooter, message, args) => {
    if(!message.member.voice.channel) return message.reply({content: "join a vc first"})

    const name = args[0]
    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(args[0])) {
      let filter = shooter.distube.setFilter(message, args[0]);
      const gdm = new Discord.MessageEmbed()
      .setDescription(`Done !.\nCurrent filters: ${filter}`|| `Removed all filters`)
      .setColor("#FF0000")
      message.react("✅")
        message.channel.send({ embeds: [gdm] });
        


    }
  }
}