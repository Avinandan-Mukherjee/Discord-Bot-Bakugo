const shooter = require("../index")
shooter.on('ready', () => {


  console.log(`${shooter.user.username} ✔️ `)

const activities = [
`s!help`,
`with ${shooter.guilds.cache.size} servers`,
`with gdm`,
`with Grandmaster`,
`with Shooter`
  ];
   let index = 0;
  setInterval(() => {
    if (index === activities.length) index = 0;
    const status = activities[index];
     shooter.user.setActivity(`${status}`, {
    type: "STREAMING",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    });
     index++;
 }, 8000);
    })

//   let i = 0;
//setInterval(() => shooter.user.setActivity(`${activities[i++ % activities.length]}`, { type: `WATCHING` }), 4000)
// }, 4000);