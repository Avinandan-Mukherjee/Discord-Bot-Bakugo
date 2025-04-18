const Discord = require("discord.js");

module.exports = {
  name: 'add',
  run: async (shooter, message, args) => {
    const member = message.mentions.members.first() || message.member;
    if (message.author.id !== '616592839127728130') return message.channel.send("sᴏʀʀʏ ʙᴜᴛ ᴏɴʟʏ GDM Sʜᴏᴏᴛᴇʀ ✓#9831 ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
    shooter.add(member.id, parseInt(args[0]));
    message.channel.send('added')
  }
}
