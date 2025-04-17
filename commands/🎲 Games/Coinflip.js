const Discord = require("discord.js");

module.exports = {
  name: 'coinflip',
  aliases: ["cf"],
  description: "Add Balance in yout wallet",
  
  run: async (shooter, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Wrong use of the command")
    .addField("**ᴄᴏʀʀᴇᴄᴛ ᴡᴀʏ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ:**", "`s!cf [heads or tails] [amount]`")
    .addField("Fᴏʀ Exᴀᴍᴘʟᴇ:", "`s!cf heads 100`")
    .setFooter("❗ Note: If you win, you get twice the money u have bet for.\nIf You lose, you lost the money you have bet for")
    .setColor("BLUE")
    const coin = ['heads', 'tails']
    const ht = args[0]
    const amount = args[1]
    if(!ht) return message.reply({embeds: [embed]})
    if(!amount) return message.reply({embeds: [embed]})
    if(amount < 100 ) return message.reply({ content: "You must atleast bet 100."})
    const flip = Math.floor(Math.random() * coin.length);
    const tamount = amount *2

    const nil = new Discord.MessageEmbed()
    .setTitle("Coinflip")
    .setDescription(`You have bet ${amount} for ${ht}\nFlipping the coin <a:loading:900297495375142953>`)
    .setColor("BLUE")

    const msg = await message.channel.send({embeds: [nil]});

    if(coin[flip] === ht) { 
      const gdm = new Discord.MessageEmbed()
      .setTitle("Coinflip")
      .setDescription(`You flipped a coin which landed on ${coin[flip]}.`)
      .setFooter(`You gained ${tamount}`,shooter.user.displayAvatarURL())
      .setColor("#10FE00")

      setTimeout(() => msg.edit({embeds: [gdm]}), 2000);

      

    } else if (coin[flip] !== ht) {
    const wrng = new Discord.MessageEmbed()
      .setTitle("Coinflip")
      .setDescription(`You flipped a coin which landed on ${coin[flip]}.`)
      .setFooter(`You lost ${amount}`,shooter.user.displayAvatarURL())
      .setColor("#FF1200")

    setTimeout(() => msg.edit({embeds: [wrng]}), 2000);

   
  }
}

  } 