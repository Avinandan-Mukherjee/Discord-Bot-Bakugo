const Discord = require("discord.js");

module.exports = {
  name: 'leaderboard',
  run: async (shooter, message, args) => {

    const collection = new Discord.Collection();
    await Promise.all(
      message.guild.members.cache.map(async(member) => {
        const id = member.id;
        const bal = await shooter.bal(id);
        console.log(`${member.user.tag} => ${bal}`)
        return bal !== 0 ? collection.set(id, {
          id,
          bal,
        })
        : null
      })
    );

    const data = collection.sort((a, b) => b.bal - a.bal).first(10)

message.channel.send(
    new Discord.MessageEmbed()
    .setTitle("Lᴇᴀᴅᴇʀʙᴏᴀʀᴅ oғ ᴛʜɪs sᴇʀᴠᴇʀ")
    .setColor("BLUE")
    .setFooter('ᴛʜᴀɴᴋ ʏᴏᴜ ғᴏʀ ᴜsɪɴɢ ᴍᴇ', shooter.user.displayAvatarURL())
    .setTimestamp()
    .setDescription(
      data.map((v,i) => {
        return `${i+1}) ${shooter.users.cache.get(v.id).tag} - ${v.bal} <:coins:900597221102333982>`

      })
    )
  )

  },
};