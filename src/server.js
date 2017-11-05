/**
 * Responsibility: Bootstrapping the app
 * This includes creating http server, connecting database, starting services and scheduling tasks.
 */
require('./utils/configEnv');

const http = require('http');

const app = require('./app');
require('./utils/dbConnection');
const models = require('./utils/loadModels');

(async function bootstrap() {
  await Promise.all(Object.values(models).map((model) => model.sync()));

  const server = http.createServer(app);
  server.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
  });
}());
