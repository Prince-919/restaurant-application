import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT,
  frontendUrl: process.env.FRONTEND_URL,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
};

const config = {
  get(key) {
    const value = _config[key];
    if (!value) {
      console.log(
        `The ${value} variable not found, Make sure to pass envirement variable.`
      );
    }
    return value;
  },
};
export default config;
