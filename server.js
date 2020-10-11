const WebSocket = require ("ws");
const WebSocketServer = new WebSocket.Server({port:8080});

WebSocketServer.on("connection", (ws) => {
  ws.send("Добро пожаловать на сервер Humorous. Введите свой ник для продолжения");
  ws.isAuth = false;
  ws.on("message", (message) => {
    if(!ws.isAuth) {
      ws.send(`Добро пожаловать, ${message}`)
  ws.nickname = message;
  ws.isAuth = true;
      return;
      }
 WebSocketServer.clients.forEach(c => c.send(`${ws.nickname}:${message}`));
  });
  
});