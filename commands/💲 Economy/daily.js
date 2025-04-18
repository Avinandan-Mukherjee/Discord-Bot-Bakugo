const Discord = require("discord.js");
const used = new Map();
const Duration = require("humanize-duration");

module.exports = {
  name: 'daily',
  cooldown: 1000 * 60 * 60 * 1,
  run: async (shooter, message, args) => {


    const cooldown = used.get(message.author.id);
    if (cooldown) {
      const remaining = Duration(cooldown - Date.now(), { units: ['h', 'm'], round: true });
      return message.channel.send(`You need to wait ${remaining} before using this command`).catch((err) => message.channel.send(`${err}`));
    }
    else {
      const coins = Math.floor(Math.random() * 5000) + 100;

      message.channel.send(`You received **${coins}** coins today.`)
      shooter.add(message.author.id, coins);
    }
    used.set(message.author.id, Date.now() + 1000 * 60 * 60 * 24);
    setTimeout(() => { used.delete(message.author.id) }, 1000 * 60 * 60 * 24);
  }
}