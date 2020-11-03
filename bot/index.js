const fs = require ("fs")
module.exports.message = (server, message,ws) => {

fs.readdirSync("./bot/cmds").forEach(f => {
  f = f.split(".")[0]
  
  if(message.startsWith(`!${f}`)) {
    require("./cmds/" + f + ".js").run(server, message,ws)
  }
})


}

    

