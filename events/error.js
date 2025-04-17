
const shooter = require("../index")

shooter.on('error', (error) => {
    console.error('Bot error:', error)
})

process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error)
})

process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error)
})
