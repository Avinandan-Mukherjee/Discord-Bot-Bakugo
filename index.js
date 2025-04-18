const { Collection, Client, MessageEmbed } = require("discord.js");

const shooter = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"],
});


const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Bot Is Online"));

app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`))

const collection = new Collection();
const config = require("./config.json");
shooter.config = config;

const schema = require('./schema');
const mongoose = require("mongoose");


mongoose.connect(process.env.mongoConnect, {
  dbName: 'yourdbname', // Replace with your database name
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  w: "majority"
})
  .then(() => {
    console.log("Connected to MongoDB ✔️");
    // Start the bot after successful DB connection
    shooter.login(process.env.token);
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    // Continue bot startup even if MongoDB fails
    startBot();
  });

function startBot() {
  shooter.login(process.env.token).catch(err => {
    console.error("Bot login error:", err);
  });
}

// Call startBot if MongoDB connects successfully
mongoose.connection.once('connected', startBot);




const prefix = config.prefix;
const token = config.token;
const fs = require("fs")
shooter.commands = new Collection();
shooter.aliases = new Collection();
shooter.categories = fs.readdirSync("./commands");
module.exports = shooter;
["handler"].forEach(handler => {
  require(`./handlers/${handler}`)(shooter);
});







const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YtDlpPlugin } = require("@distube/yt-dlp");

shooter.distube = new DisTube(shooter, {
  leaveOnStop: false,
  leaveOnFinish: false,
  emitNewSongOnly: true,
  plugins: [
    new SpotifyPlugin(),
    new SoundCloudPlugin(),
    new YtDlpPlugin()
  ]
});

shooter.distube
  .on('playSong', (queue, song) => {

    const gdm = new MessageEmbed()
      .setTitle("Now Playing...")
      .setDescription(`[${song.name}](${song.url})`)
      .setColor("#FF0000")
      .setFooter(`Added by ${song.user.username}`)
    queue.textChannel.send({ embeds: [gdm] })
  })




  .on('addSong', (queue, song) => {
    const gdm1 = new MessageEmbed()
      .setDescription(`Successfully added [${song.name}](${song.url}) - \`${song.formattedDuration}\`  to the queue. Requested by ${song.user}`)
      .setColor("#3BFF00")
    queue.textChannel.send({ embeds: [gdm1] })
  })
  .on('error', (textChannel, e) => {
    console.error(e)
    textChannel.send({ content: `An error occured: ${e}` })


  })






shooter.bal = (id) => new Promise(async ful => {
  const data = await schema.findOne({ id });
  if (!data) return ful(0);
  ful(data.coins);
})


shooter.add = (id, coins) => {
  schema.findOne({ id }, async (err, data) => {
    if (err) throw err;
    if (data) {
      data.coins += coins;
    } else {
      data = new schema({ id, coins })
    }
    data.save();
  })
}

shooter.rmv = (id, coins) => {
  schema.findOne({ id }, async (err, data) => {
    if (err) throw err;
    if (data) {
      data.coins -= coins;
    } else {
      data = new schema({ id, coins: -coins })
    }
    data.save();
  })
}