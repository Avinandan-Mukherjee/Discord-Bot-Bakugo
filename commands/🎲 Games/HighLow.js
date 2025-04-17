const { shooter, MessageEmbed, Message, MessageActionRow,MessageButton, } = require("discord.js");

module.exports = {
  name: 'hl',
  description: "Guess the number",
  
  run: async (shooter, message, args) => {
    const numbers = Array.from(Array(100), (_,i) => i+1);


    const hint = Array.from(Array(100), (_,i) => i+1);


    
    const rNumber = Math.floor(Math.random() * numbers.length);
    const rHint = Math.floor(Math.random() * hint.length);


    const gdm = new MessageEmbed()
    .setTitle("High-Low")
    .setDescription(`I have chosen a number between 1-100.\nYour hint is ${hint[rHint]}.\nIs the number Higher or lower than ${hint[rHint]}?`)
    .setColor("BLUE")


    const gdm1 = new MessageEmbed()
    .setTitle("High-Low")
    .setDescription(`The secret number was ${numbers[rNumber]} whereas the hint was ${hint[rHint]}.\nYou gained 500 <:coins:900597221102333982>`)
    .setColor("#10FE00")
    .setFooter("Your answer is correct ✅",shooter.user.displayAvatarURL())


    const gdm2 = new MessageEmbed()
    .setTitle("High-Low")
    .setDescription(`The secret number was ${numbers[rNumber]} whereas the hint was ${hint[rHint]}.`)
    .setFooter("Your answer is wrong ❌",shooter.user.displayAvatarURL())
    .setColor("#FF1200")

    const row = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("PRIMARY"),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("PRIMARY"),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("PRIMARY"),
      
      
    )
    const row1 = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("SUCCESS")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("SECONDARY")
      .setDisabled(true),
      
      
    )
    const row2 = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("DANGER")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("SECONDARY")
      .setDisabled(true),
      
      
    )
    const row3 = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("DANGER")
      .setDisabled(true),
      
      
    )
    const row4 = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("DANGER")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("SECONDARY")
      .setDisabled(true),
      
      
    )
    const row5 = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("SUCCESS")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("SECONDARY")
      .setDisabled(true),
      
      
    )
    const row6 = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("DANGER")
      .setDisabled(true),
      
      
    )
    const row7 = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("DANGER")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("SECONDARY")
      .setDisabled(true),
      
      
    )
    const row8 = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("DANGER")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("SECONDARY")
      .setDisabled(true),
      
      
    )
    const row9 = new MessageActionRow().addComponents(
      new MessageButton()
      .setCustomId("msg")
      .setLabel("Higher")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg1")
      .setLabel("Lower")
      .setStyle("SECONDARY")
      .setDisabled(true),

       new MessageButton()
      .setCustomId("msg2")
      .setLabel("Equal")
      .setStyle("SUCCESS")
      .setDisabled(true),
      
      
    )

   const sm = await message.channel.send({embeds: [gdm], components: [row]})

shooter.on("interactionCreate", async (interaction) => {
  await interaction.deferUpdate() 

if(interaction.user.id !== message.author.id) return interaction.reply({content: "This Message is not yours", ephemeral: true})

  if(numbers[rNumber] > hint[rHint]) {

    if(interaction.isButton()) {
      if(interaction.customId === "msg") {
        await sm.edit({embeds: [gdm1], components: [row1]})
       
      } else if(interaction.customId === "msg1") {
        await sm.edit({embeds: [gdm2], components: [row2]})

    } else if(interaction.customId === "msg2") {
        await sm.edit({embeds: [gdm2], components: [row3]})
    }
    }
  } else if(numbers[rNumber] < hint[rHint]) {

    if(interaction.isButton()) {
      if(interaction.customId === "msg") {
        await sm.edit({embeds: [gdm2], components: [row4]})
      } else if(interaction.customId === "msg1") {
        await sm.edit({embeds: [gdm1], components: [row5]})
        

    } else if(interaction.customId === "msg2") {
        await sm.edit({embeds: [gdm2], components: [row6]})
    }
    }
  } else if(numbers[rNumber] === hint[rHint]) {

    if(interaction.isButton()) {
      if(interaction.customId === "msg") {
        await sm.edit({embeds: [gdm2], components: [row7]})
      } else if(interaction.customId === "msg1") {
        await sm.edit({embeds: [gdm2], components: [row8]})

    } else if(interaction.customId === "msg2") {
        await sm.edit({embeds: [gdm1], components: [row9]})
        
    }
    }
  }

})
  
  }
}