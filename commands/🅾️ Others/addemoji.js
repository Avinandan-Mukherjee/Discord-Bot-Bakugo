const Discord = require("discord.js")
module.exports = {
  name: 'addemoji',
  category: 'info',
  usage: '<emoji>',
  description : "Add static and animated emojis to the server.",
  run (shooter, message, args) {
    if (!args.length)
    return message.channel.send( 'Please specify sone emojis to add to the server');
    for (const emoji of args) {
    const getEmoji = Discord.Util.parseEmoji(emoji);

    const gdm = new Discord.MessageEmbed()
    .setDescription(`Added ${emoji.name}`)

    if (getEmoji.id) {
      const emojiExt = getEmoji.animated ? '.gif' : '.png';
      const emojiURL = `https://cdn.discordapp.com/emojis/${getEmoji.id + emojiExt}`;
      message.guild.emojis
      
           
    
             .create(emojiURL, getEmoji.name)
      .then((emoji) =>
        
      message.channel.send({content: "Added.."})

      );
    }
  }

},
};