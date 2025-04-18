
module.exports = {
  name: "skip",
  description: "Skip a song (Currently disabled)",

  run: async (shooter, message, args) => {
    message.reply("Music commands are currently disabled.");
  }
}
