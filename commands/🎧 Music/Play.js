
const Discord = require("discord.js");

module.exports = {
  name: "play",
  aliases: ["p"],
  description: "Play a song",

  run: async (shooter, message, args) => {
    if(!message.member.voice.channel) {
      return message.reply({content: "You need to join a voice channel first!"});
    }

    const music = args.join(" ");
    if(!music) {
      return message.channel.send({content: "Please provide a song name or URL!"});
    }

    try {
      await shooter.distube.play(message.member.voice.channel, music, {
        member: message.member,
        textChannel: message.channel,
        message: message
      });
    } catch (err) {
      console.error(err);
      return message.channel.send({content: `Error: ${err.message}`});
    }
  }
}
