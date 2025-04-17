const Discord = require("discord.js");

module.exports = {
  name: "ttt",
  description: "Calculator",


  run: async (shooter, message, args) => {
    const simplydjs = require("simply-djs")
    simplydjs.tictactoe(message,{
      credit: (false)
    })
  }
}