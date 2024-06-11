const dotEnv = require("dotenv");
const path = require('path');
// if (process.env.NODE_ENV !== "prod") {
//   const configFile = `../../.env.dev`;
//   // dotEnv.config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) });
//   dotEnv.config({ path: path.resolve(__dirname, configFile) });
// } else {
  dotEnv.config();
// }
console.log(process.env.NODE_ENV)
module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
  EXCHANGE_NAME: 'ONLINE_SHOPPING',
  QUEUE_NAME:'CUSTOMER_QUEUE',
  // SHOPPING_BINDING_KEY: 'SHOPPING_SERVICE',
  CUSTOMER_BINDING_KEY: 'CUSTOMER_SERVICE',
};