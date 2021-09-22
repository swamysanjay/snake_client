
const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP ,// IP address here,
    port: PORT // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // code that does something when the connection is first established
  });

  conn.on("connect", () => {
    conn.write("Name: JSP");
    conn.write("Say: Hello Rob Ford");
   
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
  
module.exports = connect;