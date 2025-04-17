const Discord = require("discord.js");
const distube = require("distube")
module.exports = {
  name: "queue",
  aliases: ["q"],
  description: "Queue",

  run: async (shooter, message, args) => {
    if(!message.member.voice.channel) return message.reply({content: "join a vc first"})
let queue = shooter.distube.getQueue(message);



   if (!queue) return message.reply({content: "The queue is empty"})

 
   const desc =  (`Current queue:\n` + queue.songs.map((song, id) =>
            `**${id+1}**. [**${song.name}**](${song.url}) - \`${song.formattedDuration}\``
        ).join("\n"));

          const gdm = new Discord.MessageEmbed()
   .setTitle("Song Queue")
   .setDescription(`${desc}`)
   .setColor("#006BFF")

   message.channel.send({embeds: [gdm]})


  }
}