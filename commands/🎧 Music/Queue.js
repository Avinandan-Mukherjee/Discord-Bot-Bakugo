module.exports = {
  name: "queue",
  aliases: ["q"],
  description: "Queue (Currently disabled)",

  run: async (shooter, message, args) => {
    message.reply("Music commands are currently disabled.");
  }
}