const app = require('./src/app');

const {server: {port}} = require('./src/configs/config.mongodb')

const PORT = port || 3333;
const server = app.listen(PORT, () => {
  console.log(`App start with port ${PORT}`);
});
