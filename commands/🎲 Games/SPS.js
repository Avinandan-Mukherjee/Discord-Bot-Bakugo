const Discord = require("discord.js");

module.exports = {
  name: "rps",
  description: "Calculator",


  run: async (shooter, message, args) => {
    const simplydjs = require("simply-djs")
    simplydjs.rps(message,{
      credit: (false)
    })
  }
}