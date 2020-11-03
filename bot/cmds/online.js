module.exports.run = (server, message,ws) => {
  ws.send("-----Online Users-----")
  server.clients.forEach(c => {
    ws.send("     " + c.nickname)
  })
}