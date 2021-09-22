const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  conn.setEncoding('utf8');

  return conn;
};

const conn = connect();

conn.on('data', data => {
  console.log(data);
});


module.exports = { connect };