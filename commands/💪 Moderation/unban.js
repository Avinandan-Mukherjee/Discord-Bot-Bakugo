const Discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "moderation",
  description: "unbans member from a server",

 run : async (shooter, message, args) => {
 const member = args[0];

 if(!member) {
   return message.channel.send('enter a uid')
 }
 try {
   message.guild.fetchBans().then( bans => {
     message.guild.members.unban(member)
   })
   await message.channel.send('unbanned')
 } catch (err) {
   return message.channel.send('error')
 }
 }
 }