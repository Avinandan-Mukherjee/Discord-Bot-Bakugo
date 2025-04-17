const Discord = require("discord.js")
const db = require("quick.db")
const shooter = require("../index")
shooter.on('messageCreate', async message =>{
    if(message.author.bot) return;
    let prefix = "s!"
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = shooter.commands.get(cmd)
    if(!command) command = shooter.commands.get(shooter.aliases.get(cmd));
    if(command) command.run(shooter, message, args) 
})