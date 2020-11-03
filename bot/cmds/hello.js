module.exports.run = (server, message,ws) => {
  ws.send("Привет")
}