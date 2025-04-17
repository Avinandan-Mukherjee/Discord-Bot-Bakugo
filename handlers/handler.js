const fs = require("fs") 
const ascii = require("ascii-table");

let table = new ascii("Commands");
table.setHeading("Commands", "Status");

module.exports = shooter => {

  //handler
  fs.readdirSync('./commands/').forEach(dir => {
    const commands = fs.readdirSync(`./commands/${dir}`).filter(files => files.endsWith('.js'));

    for (let files of commands) {
      let get = require(`../commands/${dir}/${files}`);

      if (get.name) {
        shooter.commands.set(get.name, get)
        table.addRow(files, '✅');
      } else { 
        table.addRow(files, "❌");
        continue;
      }
      if (get.aliases && Array.isArray(get.aliases)) get.aliases.forEach(alias => shooter.aliases.set(alias, get.name))
    }
  })
  console.log(table.toString());

  //handler end

  //event  handle
  fs.readdirSync('./events/').forEach(dir => {
    const events = fs.readdirSync(`./events/`).filter((files) => files.endsWith('.js'));

    for (let files of events) {
      let get = require(`../events/${files}`);

      if (get.name) {
        shooter.events.set(get.name, get)
      } else {
        continue;
      }
    }
  })
  //end
}
