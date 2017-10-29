/**
 * Responsibility: Bootstrapping the app
 * This includes creating http server, connecting database, starting services and scheduling tasks.
 */
const http = require('http');

const app = require('./app');

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
