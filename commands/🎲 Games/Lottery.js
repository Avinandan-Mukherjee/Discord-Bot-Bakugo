const Discord = require("discord.js");

module.exports = {
  name: 'lottery',
  description: "Add Balance in yout wallet",
  
  run: async (shooter, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Wrong use of the command")
    .addField("**ᴄᴏʀʀᴇᴄᴛ ᴡᴀʏ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ:**", "`s!lottery [any number(1-100)] [amount]`")
    .addField("For Example:", "`s!lottery 5 100`")
    .setFooter("❗ Note: If you win, you get ten times the money u have bet for.\nIf You lose, you lost the money you have bet for")
    .setColor("BLUE")
    const number = Array.from(Array(100), (_,i) => i+1);

    const lt = args[0]
    const amount = args[1]
    if(!lt) return message.reply({embeds: [embed]})
    if(!amount) return message.reply({embeds: [embed]})
    if(amount < 100 ) return message.reply({ content: "You must atleast bet 100."})

    const draw = Math.floor(Math.random() * number.length);
    const tamount = amount *10

    const nil = new Discord.MessageEmbed()
    .setTitle("Lottery")
    .setDescription(`You have chosen ${lt} with  ${amount}. Lets see the result. <a:loading:900297495375142953>`)
    .setColor("BLUE")

    const msg = await message.channel.send({embeds: [nil]});

    if(number[draw] === lt) {
      const gdm = new Discord.MessageEmbed()
      .setTitle("Lottery")
      .setDescription(`The number that came out is ${number[draw]}.`)
      .setFooter(`You gained ${tamount}`,shooter.user.displayAvatarURL())
      .setColor("#10FE00")

      setTimeout(() => msg.edit({embeds: [gdm]}), 2000);

     

    } else if (number[draw] !== lt) {
    const wrng = new Discord.MessageEmbed()
      .setTitle("Coinflip")
      .setDescription(`The number that came out is ${number[draw]}.`)
      .setFooter(`You lost ${amount}`,shooter.user.displayAvatarURL())
      .setColor("#FF1200")

    setTimeout(() => msg.edit({embeds: [wrng]}), 2000);

  }
}

  } 