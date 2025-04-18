module.exports = {
  name: "play",
  aliases: ["p"],
  description: "Play a song (Currently disabled)",

  run: async (shooter, message, args) => {
    message.reply("Music commands are currently disabled due to some issues.");
  }
}