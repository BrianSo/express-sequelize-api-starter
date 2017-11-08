require('../src/utils/configEnv');
const models = require('../src/utils/loadModels');

beforeAll(async () => {
  await Promise.all(Object.values(models).map(model => model.sync({ force: true })));
});
